import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavbarOthers from "../components/NavbarOthers";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Dashboard = () => {
  const [carData, setCarData] = useState([]); // Initialize with an empty array
  const [searchData, setSearchData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {

        // const response = await axios.get("https://ea68-150-129-170-239.ngrok-free.app/api/vehicles");
        // console.log(response);
        // setCarData(response.data);

        const response = await fetch('http://localhost:8080/api/vehicles', {
          method: "GET"
        });

        const data = await response.json();
        setCarData(data);
      }
      catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    const filtered = carData.filter(car => {
      return car.vehicleNumber.toLowerCase().includes(term.toLowerCase());
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#64B5F6" }}>
        <div>
          <NavbarOthers />
        </div>

        <div style={{ position: "absolute", top: "15vh", left: "25vw" }}>
          <SearchBar/>
        </div>

        <div style={{ position: "absolute", top: "25vh", left: "25vw" }}>
          <Filter />
        </div>

        <div style={{ position: "absolute", top: "25vh", right: "25vw" }}>
          <Sort />
        </div>

        <div style={{ margin: "10px", width: "35vw", position: "absolute", top: "310px", left: "70vh" }}>
          {Array.isArray(carData) && carData.length > 0 ? (
            carData.map((car) => (
              <Card
                key={car.vehicleNumber} // Ensure each card has a unique key
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
