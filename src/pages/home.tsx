import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile/product-tile';
import { CardItem, RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {  setProducts } from '../store/slices/products-slice';

const Home = () => {
    const dispatch=useDispatch();
    const  products  = useSelector((state: RootState) => state.products);
    
    const [loading, setLoading]= useState(false);

    async function fetchListOfProducts(){
        setLoading(true);
        const res= await fetch("https://fakestoreapi.com/products");
        const data:CardItem[] = await res.json();
        const productsWithLikes = data.map((product: any) => ({
            ...product,
            like: false, 
          }));

        if(productsWithLikes ){
            
            setLoading(false);
            dispatch(setProducts(productsWithLikes));
        }
    }

    useEffect(() => {
        if (!products || products.length === 0) {
          fetchListOfProducts();
        }
      }, [products]);
      
    return (
        <div>
            {
                loading ? <div className="min-h-screen w-full flex justify-center items-center">
                    <Circles
                    height={"120"}
                    width={"120"}
                    color="rgb(127,29,29)"
                    visible={true}
                    />
                </div>:(
                <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
                    {
                        products && products.length 
                        ? products.map((productItem, index)=>(
                            <ProductTile key={index} product={productItem}/>
                        )) 
                        :null
                    }
                </div>
                
            )}
        </div>
    );
}

export default Home;