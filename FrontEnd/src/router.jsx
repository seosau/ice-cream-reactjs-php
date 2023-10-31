import { Navigate, createBrowserRouter} from 'react-router-dom'
import { 
    Register, 
    Login, 
    Home, 
    Dashboard, 
    AddProduct, 
    ViewProduct, 
    ProductDetail, 
    EditProduct, 
    Profile, 
    UpdateProfile,
    UserAccount } 
from "./pages";

import { DefaultLayout, GuestLayout, AdminLayout } from './layouts';
const router = createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout/>,
        children: [
            {
                path:'/home',
                element: <Navigate to='/'/>
            },
            {
                path:'/',
                element: <Home/>
            },
        ]
    },
    {
        path:"/",
        element:<GuestLayout/>,
        children: [
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminLayout/>,
        children: [
            {
                path:'/admin/dashboard',
                element: <Dashboard/>

            },
            {
                path:'/admin',
                element: <Navigate to='/admin/dashboard'/>

            },
            {
                path:'/admin/addProduct',
                element: <AddProduct/>
            },
            {
                path:'/admin/viewProduct',
                element: <ViewProduct/>
            },
            {
                path:'/admin/productDetail',
                element: <ProductDetail/>
            },
            {
                path:'/admin/editProduct',
                element: <EditProduct/>
            },
            {
                path:'/admin/profile',
                element: <Profile/>
            },
            {
                path:'/admin/updateProfile',
                element: <UpdateProfile/>
            },
            {
                path:'/admin/userAccount',
                element: <UserAccount/>
            },
        ]
    },
])


export default router;
