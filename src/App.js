import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    Register,
    Login,
    Home,
    Dashboard,
    AddProduct,
    ViewProduct,
} from "./pages";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/AddProduct" element={<AddProduct />} />
                    <Route path="/ViewProduct" element={<ViewProduct />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
