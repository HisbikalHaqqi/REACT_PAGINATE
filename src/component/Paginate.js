import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate(props) {

    const handlePageClick = (data) =>{
        return props.handlePageClick(data);
    }

    return(
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={'.....'}
                pageCount={props.pageCount}
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />  
        </div>
           
    )
}

export default Paginate;