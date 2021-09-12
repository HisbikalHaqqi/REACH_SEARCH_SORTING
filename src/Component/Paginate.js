
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from 'react';

function Paginate() {
    const [pageCount, setpageCount] = useState(10);

    const handlePageClick = () =>{

    }
    
    return (
        <div className="container mt-5">
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

export default Paginate;