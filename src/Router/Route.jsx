import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Visited from "../Pages/Visited/Visited";
import Details from "../Pages/Details/Details";


const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path:'/visited',
                element: <Visited/>,
            },
            {
                path: '/:id',
                element: <Details/>
            }
        ]
    }
])

export default myCreateRoute;