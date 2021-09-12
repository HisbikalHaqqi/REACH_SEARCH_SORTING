import React,{ useState, useEffect} from 'react';
import Paginate from '../Component/Paginate';
import Product from '../Component/Product';

const Backend = () => {
    const [products, setproducts] = useState([]);
    const apiKey   = "e6dccd0cb4bd40debda2f669c09facd6";
    const url      = `https://newsapi.org/v2/`;
    const [filter, setfilter] = useState({
        s:"tesla",
        sort:"popularity",
    });

    useEffect(() => {
        const getTopHeadline = async () => {
            const arr = [] ;

            if(filter.s){
                arr.push(`q=${filter.s}`);
            }
            if(filter.sort){
                arr.push(`sortBy=${filter.sort}`);
            }
            
            const response = await fetch(url+`everything?${arr.join('&')}&apiKey=${apiKey}`);
            const content  = await response.json();
            setproducts(content.articles);
        }
        getTopHeadline();
    }, [filter])

    return(
        <div>
            <Product data={products} filters={filter} setfilter={setfilter} isSearch={true}/>
            <Paginate/>
        </div>
    )
}

export default Backend;