import React,{ useState, useEffect} from 'react';
import Product from '../Component/Product';

const Frontend = () => {
    const [allProducts, setallProducts] = useState([]);
    const apiKey   = "e6dccd0cb4bd40debda2f669c09facd6";
    const country  = "us";
    const category = "business";
    const url      = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
    const [filters, setfilters] = useState({
        s:"",
        sort:"popularity",
    });
    const [filteredProducts, setfilteredProducts] = useState([]);

    useEffect(() => {
        const getTopHeadline = async () => {
            const response = await fetch(url);
            const content  = await response.json();
            setallProducts(content.articles);
            setfilteredProducts(content.articles);
        }
        getTopHeadline();
    }, []);

    useEffect(() => {
        let products = allProducts.filter(p => p.title.toLowerCase().indexOf(filters.s.toLocaleLowerCase()) >= 0 || p.description.toLowerCase().indexOf(filters.s.toLocaleLowerCase()) >= 0);
        setfilteredProducts(products);

    }, [filters])
    return(
        <Product data={filteredProducts} filters={filters} setfilter={setfilters}/>
    )
}

export default Frontend;