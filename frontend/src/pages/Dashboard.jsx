import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import NavbarOthers from "../components/NavbarOthers";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Dashboard = () => {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                <div>
                    <NavbarOthers />
                </div>

                <div style={{ position: "absolute", top: "15vh", left: "25vw" }}>
                    <SearchBar />
                </div>

                <div style={{ position: "absolute", top: "25vh", left: "25vw" }}>
                    <Filter />
                </div>

                <div style={{ position: "absolute", top: "25vh", right: "25vw" }}>
                    <Sort />
                </div>

                <div  style={{ margin: "10px", width: "25vw", position:"absolute", top:"210px", left:"80vh"}}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>

            </div>



        </>

    )
};

export default Dashboard;

// <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//             <NavbarOthers />
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
//                 <SearchBar />
//             </div>
//             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
//                 <Filter />
//                 <Sort />
//             </div>
//                         <Card
//                             key={index}
//                             date={card.date}
//                             entryTime={card.entryTime}
//                             exitTime={card.exitTime}
//                             carNumber={card.carNumber}
//                             style={{ flex: "1 1 300px" }} // Adjust card width
//                         />


