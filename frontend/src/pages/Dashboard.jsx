import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavbarOthers from "../components/NavbarOthers";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";

const Dashboard = () => {
 const [carData, setCarData] = useState([]);
 const [searchResults, setSearchResults] = useState([]);
 const [hasSearched, setHasSearched] = useState(false);
 const [sortedResults, setSortedResults] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/vehicles");
        setCarData(response.data);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
 }, []);

 const handleSearchResults = (results) => {
    setSearchResults(results);
    setHasSearched(true);
 };

 const handleSortedResults = (sorted) => {
    setSortedResults(sorted);
    setHasSearched(true);
 };

 const resetSearchResults = () => {
    setSearchResults([]);
    setSortedResults([]);
    setHasSearched(false);
 };

 const displayData = hasSearched ? (sortedResults.length > 0 ? sortedResults : searchResults) : carData;

 return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#64B5F6" }}>
        <div>
          <NavbarOthers />
        </div>

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
          <video autoPlay loop muted style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}>
            <source src="https://s3.amazonaws.com/random-static.parkwhiz/videos/home-header-3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div style={{ position: "absolute", top: "15vh", left: "25vw", zIndex: 2 }}>
            <SearchBar onSearch={handleSearchResults} onReset={resetSearchResults} />
          </div>

          <div style={{ position: "absolute", top: "25vh", left: "25vw", zIndex: 2 }}>
            <Sort onSort={handleSortedResults} />
          </div>

          <div style={{
            margin: "10px",
            width: "35vw",
            position: "absolute",
            top: "310px",
            left: "70vh",
            zIndex: 2,
            maxHeight: "calc(100vh - 310px)",
            overflowY: "scroll",
            scrollbarWidth: "none", /* Firefox */
            msOverflowStyle: "none", /* IE and Edge */
            WebkitOverflowScrolling: "touch", /* Chrome, Safari, and Opera */
            overflowX: "hidden",
            paddingRight: "17px" /* To compensate for the hidden scrollbar */
          }}>
            {Array.isArray(displayData) && displayData.length > 0 ? (
              displayData.map((car) => (
                <Card
                 key={car.vehicleNumber}
                 carNumber={car.vehicleNumber}
                 entryTime={car.entryTime}
                 exitTime={car.exitTime}
                />
              ))
            ) : (
              <p>No car data available</p>
            )}
          </div>
        </div>

      </div>
    </>
 );
};

export default Dashboard;
