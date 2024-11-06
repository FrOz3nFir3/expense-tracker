import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound/index.js";
import Header from "./Header";
import DashBoard from "./DashBoard/index.js";

function App() {
    return (<BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<>home page</>} />

            <Route path="dashboard" element={<DashBoard />} />

            <Route path="authenticate" element={<>Auth</>} />

            <Route path="logout" element={<>logout</>} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>)
}

export default App;