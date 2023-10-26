import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../redux/action/index";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state, "state in cart");
  const dispath = useDispatch();

  const handleClose = (item) => {
    dispath(deleteCart(item));
  };

  return (
    <div>
    <div>
      {state.length !== 0 ? (
       state.map((item) => (
          <div className="container py-4">
            <button
              className="btn-close float-end"
              onClick={() => handleClose(item)}
            ></button>

            <div className="row justify-content-center">
              <div className="col-md-4">
                <img src={item.image} alt="" height="200px" width="200px" />
              </div>
              <div className="col-md-4">
                <h3>{item.title}</h3>
                <p className="lead fw-bold">${item.price}</p>
              </div>
            </div>
          </div>
        ))
       
        
      ) : (
        <div className="d-flex justify-content-center align-item-center h-100">
          No Item in the Cart
        </div>
      )}
    </div>
    {state.length!==0 &&
    <>
    <hr />
    <div className="row">
     <p className="fw-bold mx-3">total price:$ {state.length!==0 && state.map((item)=>item.price).reduce((total,num)=>total+Math.round(num))}</p>
     <div className="d-flex align-item-center justify-content-center">
     <NavLink className="btn btn-outline-dark  align-item-center" to="/checkout">Checkout</NavLink>
        
     </div>
    </div>
    </>
    }
    </div>
  );
};

export default Cart;
