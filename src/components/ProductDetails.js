import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {addtoCart} from "../redux/action"

const ProductDetails = () => {
    const{id} = useParams();
    const[productDetail,setProductDetail] = useState([]);
    const dispath = useDispatch();

    // function to add product
    const addProduct = (product)=>{
        dispath(addtoCart(product))
    }

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setProductDetail(data);
   
      console.log(data);
    })
},[])

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
              <img src={productDetail.image} alt="" height="400px" width="400px" />
            </div>
            <div className='col-md-6'>
                <h4 className='text-uppercase'>{productDetail.category}</h4>
                <h1 className='display-5'>{productDetail.title}</h1>
                <div className='d-flex justify-content-between py-3'>
                <p>
                  <strong>Rating:</strong> {productDetail?.rating?.rate}⭐
                </p>
                <p>
                <strong>Review:</strong>  {productDetail?.rating?.count}
                </p>

                </div>
                
                <h4 className='fw-bold py-3'>${productDetail.price}</h4>
                <p className='py-2'>{productDetail.description}</p>
                <button className='btn btn-outline-dark m-2 px-2' onClick={()=>addProduct(productDetail)}>ADD TO CART</button>
                <NavLink className='btn btn-dark ml-2 px-2' to="/cart">GO TO CART</NavLink>
                </div>
        </div>
    </div>
  )
}

export default ProductDetails