import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({productInfo}) => {
  return (
    <div className='col-md-3 mb-3 text-center'>
        <div className='card h-100 m-2'>
        <img src={productInfo.image} alt={productInfo.title} height="250px" width="250px"/>
        <div className="card-body">
            <h5 className="card-title">
                {productInfo.title}
            </h5>
            {/* <p className="card-text">{productInfo.description}</p> */}
            <p>${productInfo.price}</p>
            <div className="d-flex justify-content-between">
            <p className='startRating'>
               {productInfo.rating.rate}⭐ ratings
                
            </p>
            <p>👍{productInfo.rating.count}</p>
            </div>
            
            <NavLink to ={`${productInfo.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
        </div>
        </div>
    </div>
  )
}

export default ProductCard