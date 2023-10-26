import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
        console.log(data);
      });
  }, []);

  const handleChange = (e)=>{
    let searchvalue = e.target.value;
   const f =  data.filter((item)=>item.title.toLowerCase().includes(searchvalue.toLowerCase()) || item.description.toLowerCase().includes(searchvalue.toLowerCase()));
   setFilteredData(f)
  }
  return (
    <>
    <div className="container">
        
    <div className="row">
        <input placeholder="Search for product by title and description" onChange={(e)=>handleChange(e)}/>
      {filteredData.map((item) => (
        <ProductCard productInfo={item} />
      ))}
      </div>
      </div>
      
    </>
  );
};

export default ProductList;
