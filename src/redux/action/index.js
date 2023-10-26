export const addtoCart = (product)=>{

    return{
        type:"ADD_TO_CART",
        payload:product
    }
}


 export const deleteCart = (product)=>{
    return{
        type:"DELETE_ITEM",
        payload:product
    }
}

