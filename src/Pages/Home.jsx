import React from 'react';
import {Navbar} from "react-bootstrap";
import NavbarC from "../Components/NavbarC";
import SidebarC from "../Components/Home/SidebarC";
import TodayMatch from "../Components/Home/TodayMatch";

function Home() {
    return (
        <div>
            <NavbarC />
            <TodayMatch />
        </div>
    );
}

export default Home;