// SearchBar.js
import React, { useState } from 'react';
import axios from 'axios'; 
import { MDBInputGroup, MDBIcon } from 'mdb-react-ui-kit';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/search/car/${searchTerm}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching for cars:', error);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <MDBInputGroup className='square border border-0' style={{ width: '50vw' }}>
        <input
          className='form-control w-50'
          type='text'
          placeholder='Search'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <MDBIcon fas icon='search' className='p-2 border border-0' size='1x' style={{ backgroundColor: "#7986CB" }} />
      </MDBInputGroup>
    </form>
  );
}
