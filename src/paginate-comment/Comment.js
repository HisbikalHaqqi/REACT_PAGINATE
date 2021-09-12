
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';

function Comment() {
    const [items, setitems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    let limit = 10;

    useEffect(() => {
    const getPhotos = async(currentPage) => {
        const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?${currentPage}&_limit=10`
        );
        const data = await res.json();
        const total = res.headers.get('x-total-count');
        setpageCount(Math.ceil(total/limit));
        setitems(data);
    };

    getPhotos();
    }, []);

    const fetchPhotos = async(currentPage) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=10`
    );
    const data = await res.json();
    return data;
    };
    
    const handlePageClick = async (data) => {
    let currentPage = data.selected + 1 ;

    const photosFromServer = await fetchPhotos(currentPage);
    console.log(photosFromServer);
    setitems(photosFromServer);
    }

    return (
        <div className="container">
        <center><h4>Comment Post</h4></center>
        <div className="row">
          {items.map((item) => {
            return <div>
              <div class="card" style={{width:"18rem"}} key={item.id}>
                <div class="card-body">
                  <h5 class="card-title">POST ID: {item.id}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{item.name} - {item.email}</h6>
                  <p class="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          })}
        </div>
        
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={'.....'}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    )
}

export default Comment;