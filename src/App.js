import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Register from "./pages/Admin/Register/Register";
import Login from "./pages/Admin/Login/Login";
import Dashboard from "./pages/Admin/Admin";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Admin" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
