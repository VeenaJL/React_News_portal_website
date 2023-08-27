import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddNews from "./components/AddNews";
import EditNews from "./components/Edit";
import Home from './components/Home';
import LoginAdmin from "./components/auth/Login";
const router = createBrowserRouter([
    {path:'/' , element:<App/>},
    {path:'/Add', element:<AddNews/>},
    {path:'/edit/:itemId', element:<EditNews/>},
    {path:'/Home', element:<Home/>},
    {path:'/login', element:<LoginAdmin/>}
])


export default router;