import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login"
import App from "../App"

const AppRouter=()=>{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;