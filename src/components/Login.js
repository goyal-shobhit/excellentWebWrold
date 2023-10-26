import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const initialValue = {
        "username":"",
        "password":""
    }
const[credential,setCredentail] = useState(initialValue);
const[isLoading,setIsLoading] = useState(false)

const handleChange = (e)=>{
    const{name,value} = e.target;
    setCredentail(
        {...credential,[name]:value}
    )
}


const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(credential,"cred")
 


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify(credential);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    setIsLoading(false);
    
    fetch("https://fakestoreapi.com/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        setIsLoading(true);
        navigate("/products")
        localStorage.setItem("token",result.token)
        
        
      })
      .catch(error => console.log('error', error));

  
}

  return (
    <div >
       <h3 className="fw-bold">Login Form</h3>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="form-control" name="username" value={credential.username} onChange={(e)=>handleChange(e)}/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" name="password" value={credential.password} onChange={(e)=>handleChange(e)}/>
        </div>
        <div className="d-flex justify-content-center align-item-center">
        <button type="submit" className="btn btn-outline-dark py-1 mt-3" >
          Login
        </button>
        </div>
      </form>
   
    </div>
  );
};

export default Login;
