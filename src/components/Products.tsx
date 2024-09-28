import React from 'react';
import './Products.css';


interface ProductsProps {
    title: string;
    price: number | string;
    image: string;
    addProduct: React.MouseEventHandler;
}

const Products: React.FC<ProductsProps> = ({title, price, image, addProduct}) => {
    return (
            <button type='button' className='products' onClick={addProduct}>
                <div>
                    <img src={image} width={70} height={60} alt={title} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>Price: {price}</p>
                </div>
            </button>
    );
};

export default Products;