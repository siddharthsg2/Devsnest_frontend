
import React, { useEffect, useState } from "react";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import { commerce } from '../lib/commerce';
import Loaders from "../components/Loaders";

const  Women = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const categories="women"
 const [isLoading, setIsLoading] = useState(true);

  const fetchCategoryProducts = async () => {
    
    const response = await commerce.products.list({ category_slug: categories}) ;
    const {data, meta} = response
    setProducts(data)
    setIsLoading(false)
}

console.log(products)

useEffect(() => {
  fetchCategoryProducts();

}, []);

if(!isLoading){
  return (
  <>
  <Grid col={4} mdCol={2} smCol={1} gap={20}>
     {products.map((product,index)=>(
              <ProductCard 
              key={index}
              product={product} 
              onAddToCart={onAddToCart}
              img={product.media.source}
              />
     ))}
     </Grid>

  </>
     )}
     else
     {
       return <Loaders/>
     }
     }
     

     export default Women;