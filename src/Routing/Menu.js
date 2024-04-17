import { Link, NavLink } from "react-router-dom";

function Menu()
{
    return <>
        <div style={{color:"blue"}}>
            <Link to="/" style={{color:"blue"}}>Home&nbsp;&nbsp;&nbsp;</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="productlist" style={{color:"blue"}}>Product List</Link> 
            &nbsp;&nbsp;&nbsp;
            <Link to="about">About Us</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="contact" >COntact Us</Link>
                       
        </div>
    </>
}

export default Menu;