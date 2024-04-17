import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';

import {useState, useEffect} from 'react';
import {useLocation} from 'react';
import axios from 'axios';

import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

export default function ProductList()
{
    const [AllProduct, setAllProduct] = useState([]);

    useEffect(
        ()=>{
           axios.get('https://fakestoreapi.com/products')
           .then(
            (response)=>{
                   console.log(response);
                   setAllProduct(response.data);
            }
           )
           .catch((error)=>{ console.log("error" + error)})
        },[]
    );

    return <>
    
            <Header></Header>

            <div id="Allproduct">
            
            {
                AllProduct.map(
                    (product)=>{
                        return (<>
                        <Link to={`/Allproduct/${product.id}`}>

                            <div id="ProductElement">
                                <div id="title"><p id="productname">{product.title}</p></div>
                                <div className="image-container">
                                    <img id="ecomimg" src={product.image} alt="Product" />
                                </div>                           
                                <div className="price"> <h1>${product.price}</h1> </div>
                            
                                {/* <div> <h1>${i.price}</h1> </div> */}
                                {/* <div><p>{i.description}</p></div> */}
                                </div>
                        </Link>
                                </>)
                    }
                )
            }
        </div>
        
        <Footer></Footer>
    </>
}