import React, { useState } from 'react'
import { useNavigate} from "react-router-dom"

const Checkout = () => {
    const navigate = useNavigate();
    const[address,setAddress] = useState("");


 const   handleSubmit = ()=>{
    if(address===""){
        return false;
    }
else{

    navigate("/thankyou")
}
    }
  return (
    <div className='container px-3' >
        <div className="mt-3 py-3 form-floating">
        
<textarea className='form-control' id="address"value={address} onChange={(e)=>setAddress(e.target.value)} >

</textarea>
<label htmlFor='address'>Address</label>
</div>
<button className='btn btn-outline-dark'onClick={handleSubmit}>Proceed to Checkout</button>
    </div>
  )
}

export default Checkout