import { Routes, Route } from "react-router";
import Home from "../Components/Home";
import ProductList from "../Components/ProductList";
// import About from "./About";
// import Contact from "./Contact";
// import Unauthorized from "./Unauthorized";
// import { ProductDetail } from "./ProductDetail";

function RoutingConfig()
{
    return <>
        <Routes>
            <Route path="/" element={<Home></Home>} ></Route>
            <Route path="productlist" element={<ProductList></ProductList>} ></Route>
            {/* <Route path="about" element={<About></About>} ></Route>
            <Route path="contact" element={<Contact></Contact>} ></Route>
            <Route path="*" element={<Unauthorized></Unauthorized>} ></Route>            
            <Route path="viewproduct/:productId" element={<ProductDetail></ProductDetail>} ></Route> */}
        </Routes>
    </>
}

export default RoutingConfig;