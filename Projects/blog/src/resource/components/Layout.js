import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>Layout page</h1>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/about" >About</NavLink></li>
                <li><NavLink to="/contact" >Contact</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Layout;