import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import NavbarOthers from "../components/NavbarOthers";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Dashboard = () => {
  const [carData, setCarData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        // const response = await axios.get("https://ea68-150-129-170-239.ngrok-free.app/vehicle/read");
        // console.log(response);
        // setCarData(response.data);

        const response = await fetch('http://localhost:8080/vehicle/read', {
          method: "GET"
        });

        const data = await response.json();
        setCarData(data);


      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchData();
  }, []);

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

        <div style={{ margin: "10px", width: "25vw", position: "absolute", top: "210px", left: "80vh" }}>
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
