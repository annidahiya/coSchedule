import React from "react";
import { useEffect } from "react";
import Main from "../components/MainPage/Main";
import Navbar from "../components/Navbar/Navbar";

export default function LandingPage() {
    useEffect(() => {
        document.title =
            "Organize All Of Your Marketing In One Place - CoSchedule";
    }, []);
    return (
        <>
            <Navbar />
            <Main />
        </>
    );
}
