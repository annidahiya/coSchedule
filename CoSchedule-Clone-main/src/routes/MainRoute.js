import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Celender from "../pages/Celender/Celender";
import Headline from "../pages/Headline/Headline";
import MarketingSuite from "../pages/MarketingSuite";
import Calender from "../CalenderComponents/Calender";
import Task from "../pages/Task/Task";

export default function MainRoute() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/callender" element={<Celender />} />
            <Route path="/headline" element={<Headline />} />
            <Route path="/suite" element={<MarketingSuite />} />
            <Route path="/MainCalender" element={<Calender />} />
            <Route path="/todoTask/:date" element={<Task />} />
        </Routes>
    );
}
