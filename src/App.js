import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Thankyou from "./components/Thankyou";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
      </Routes>
    </div>
  );
}

export default App;
