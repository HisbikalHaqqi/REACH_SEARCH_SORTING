import React from 'react';

function Product(props) {

    const search = (s) => {
        props.setfilter({
            ...props.filters,
            s
        });
    }

    const sort = (sort) => {
        props.setfilter({
            ...props.filters,
            sort
        })
    }

    return(
        <>
        {props.isSearch ? 
            <div className="col-md-12 mb-4 input-group">
                <input type="text" className="form-control" placeholder="Search" onChange={ (e) => search(e.target.value) }/>
                <div className="input-group-append">
                    <select className="form-select" onChange={ (e) => sort(e.target.value)}>
                        <option value="">--CHOOSE</option>
                        <option value="popularity">POPULARITY</option>
                    </select>
                </div>
            </div> : ''}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {
                props.data.map((item,index)=> {
                   return(
                       <div key={index}>
                            <div className="col" >
                                <div className="card shadow-sm">
                                    <img src={item.urlToImage} height={200} alt={item.title}/>
                                    <div className="card-body">
                                        <p className="card-text">{item.author}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-muted">{item.title}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>
                   ) 
                })
            }
         </div>   
        </>
    )
}
export default Product;