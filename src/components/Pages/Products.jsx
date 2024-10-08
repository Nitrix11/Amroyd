import React from 'react';
import '../scss/Products.css';


import abt1 from"../../assets/abt1.jpeg"
import abt2 from"../../assets/abt2.jpeg"
import abt3 from"../../assets/abt3.jpeg"
import abt4 from"../../assets/abt4.jpeg"
import abt5 from"../../assets/abt5.jpeg"
import abt6 from"../../assets/abt6.jpeg"
import abt7 from"../../assets/abt7.jpeg"
import abt8 from"../../assets/abt8.jpeg"
import abt9 from"../../assets/abt9.jpeg"
import abt10 from"../../assets/abt10.jpeg"
import abt11 from"../../assets/abt11.jpeg"
import TabSection from '../EG';

const products = [
    // { id: 1, name: "lorem", price: '$20', image:abt1 },
    { id: 2, name:"lorem", price: '$40', image: abt2 },
    { id: 3, name: "lorem", price: '$60', image: abt3 },
    { id: 4, name: "lorem", price: '$50', image: abt4 },
    { id: 5, name: "lorem", price: '$20', image:abt5 },
    { id: 6, name:"lorem", price: '$40', image: abt6 },
    { id: 7, name: "lorem", price: '$60', images: abt7 },
    { id: 8, name: "lorem", price: '$50', image: abt8 },
    { ids: 9, name:"lorem", price: '$40', images: abt9 },
    { ids: 10, name: "lorem", price: '$60', images: abt10 },
    { ids: 11, name: "lorem", price: '$50', images: abt11 },

];

const ProductsPage = () => {
    return (
       
        <div className="products-container mt-[100px] ">
             <TabSection/>
            <h1 className='text-[35px] font-weight-bold mb-[10px]'>Our Products</h1>
           
            <section className="grid-view">
                <h2 className='text-[25px] font-weight-bold mb-[20px]'>Grid View</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card grid-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                          
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="list-view">
                <h2 className='text-[35px] font-weight-bold mb-[30px] mt-[40px]'>List View</h2>
                <div className="product-list">
                    {products.map(product => (
                        <div key={product.ids} className="product-card list-card">
                            <img src={product.images} alt={product.name} className="product-image" />
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="carousel-view5">
                <h2 className='text-[35px] font-weight-bold mb-[30px] mt-[40px]'>Carousel View</h2>
                <div className="carousel5">
                    {products.map(product => (
                        <div key={product.id} className="product-card carousel-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;