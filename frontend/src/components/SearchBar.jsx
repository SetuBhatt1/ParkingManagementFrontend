import React, { useState } from 'react';
import axios from 'axios';
import { MDBInputGroup, MDBIcon, MDBBtn, MDBSpinner } from 'mdb-react-ui-kit';
import { auth } from '../firebase';

export default function SearchBar({ onSearch, onReset }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchVehicle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      console.log("called search function");
      const idToken = await auth.currentUser.getIdToken();
      console.log(idToken)
      const response = await axios.get(`http://localhost:8080/api/vehicles/search?vehicleNumber=${query}`, {
        headers: { Authorization: `Bearer ${idToken}` },
      });
      console.log("searched successfully");
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setError('Error fetching data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const resetSearch = () => {
    setQuery('');
    onReset();
  }

  return (
    <form onSubmit={searchVehicle} className="search-bar">
      <MDBInputGroup className='square border border-0' style={{ width: '50vw', marginBottom: '1rem' }}>
        <input
          className='form-control w-50'
          type='text'
          placeholder='Search'
          value={query} onChange={e => setQuery(e.target.value)}
          aria-label="Search vehicles"
        />
        <MDBBtn fas icon='search' size='1x' style={{ backgroundColor: "#7986CB", marginRight: "10px" }} type="submit">Search</MDBBtn>
        <MDBBtn fas icon='times' size='1x' style={{ backgroundColor: "#7986CB" }} type="button" onClick={resetSearch}>Reset</MDBBtn>
      </MDBInputGroup>
      {isLoading && (
        <div className="spinner-container">
          <MDBSpinner color="primary" />
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
