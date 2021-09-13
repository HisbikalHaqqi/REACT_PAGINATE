import React,{ useState, useEffect} from 'react';
import Paginate from '../component/Paginate';
import Post from '../component/Post';

function Home(){
    const [items, setItems]         = useState([]);
    const [pageCount,setPageCount]  = useState(0);
    let limit = 10;

    useEffect(() => {
        const getComment = async(currentPage) => {
            const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?${currentPage}&_limit=10`
            );
            const data = await res.json();
            const total = res.headers.get('x-total-count');
            setPageCount(Math.ceil(total/limit));
            setItems(data);
        };
    
        getComment();
        }, []);
    
    const fetchComment = async(currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
        );
        const data = await res.json();
        return data;
    };
    
    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1 ;

        const photosFromServer = await fetchComment(currentPage);
        setItems(photosFromServer);
    }


    return(
        <>
            <Post data={items}/>
            <Paginate handlePageClick={handlePageClick} pageCount={pageCount}/>
        </>
    )
}

export default Home;