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
 const [sortedResults, setSortedResults] = useState([]); // State to hold sorted results

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

 
 const displayData = hasSearched ? (sortedResults.length > 0 ? sortedResults : searchResults) : carData;

 return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#64B5F6" }}>
        <div>
          <NavbarOthers />
        </div>

        <div style={{ position: "absolute", top: "15vh", left: "25vw" }}>
          <SearchBar onSearch={handleSearchResults} />
        </div>

        <div style={{ position: "absolute", top: "25vh", left: "25vw" }}>
          <Sort onSort={handleSortedResults} />
        </div>

        <div style={{ margin: "10px", width: "35vw", position: "absolute", top: "310px", left: "70vh" }}>
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
    </>
 );
};

export default Dashboard;
