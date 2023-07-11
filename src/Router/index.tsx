import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Store from "../Pages/Store/Store";
import Cart from "../Pages/Shop/Cart";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/> ,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path: "/store",
                element: <Store/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/signIn",
                element: <Register/>
            }
        ]
    }
])

export default router;