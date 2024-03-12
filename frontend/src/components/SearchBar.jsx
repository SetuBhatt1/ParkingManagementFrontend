// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios';
import { MDBInputGroup, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  // const [results, setResults] = useState([]);

  const searchVehicle = async (e) => {
    e.preventDefault();
    try {
      console.log("called search function")
      const response = await axios.get(`http://localhost:8080/api/vehicles/search?vehicleNumber=${query}`);
      console.log("searched successfully")
      onSearch(response.data)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }

  return (
    <form onSubmit={searchVehicle}>
      <MDBInputGroup className='square border border-0' style={{ width: '50vw' }}>
        <input
          className='form-control w-50'
          type='text'
          placeholder='Search'
          value={query} onChange={e => setQuery(e.target.value)}
        />
        <MDBBtn fas icon='search' size='1x' style={{ backgroundColor: "#7986CB" }}>Search</MDBBtn>
      </MDBInputGroup>
    </form>
  );
}
