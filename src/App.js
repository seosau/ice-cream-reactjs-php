import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Register,
    Login,
    Home,
    Dashboard,
    AddProduct,
    ViewProduct,
    ProductDetail,
} from "./pages";
import { AdminHeader } from "./components";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/Admin/Dashboard"
                        element={
                            <AdminHeader>
                                <Dashboard />
                            </AdminHeader>
                        }
                    />
                    <Route
                        path="/Admin/Login"
                        element={
                            <AdminHeader>
                                <Login />
                            </AdminHeader>
                        }
                    />
                    <Route
                        path="/Admin/Register"
                        element={
                            <AdminHeader>
                                <Register />
                            </AdminHeader>
                        }
                    />
                    <Route
                        path="/Admin/AddProduct"
                        element={
                            <AdminHeader>
                                <AddProduct />
                            </AdminHeader>
                        }
                    />
                    <Route
                        path="/Admin/ViewProduct"
                        element={
                            <AdminHeader>
                                <ViewProduct />
                            </AdminHeader>
                        }
                    />
                    <Route
                        path="/Admin/ProductDetail"
                        element={
                            <AdminHeader>
                                <ProductDetail />
                            </AdminHeader>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
