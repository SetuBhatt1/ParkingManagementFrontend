import React, { useState } from 'react';
import axios from 'axios';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBIcon } from 'mdb-react-ui-kit';

function Sort({ onSort }) {
    const [sortOption, setSortOption] = useState('vehicleNumber');

    const sortVehicles = async (option) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/vehicles/sort?sortBy=${option}`);
            onSort(response.data); 
            console.log("sorted successfully")
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MDBDropdown>
                <MDBDropdownToggle tag="button" color="primary" title={sortOption} outline>
                    Sort by
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem onClick={() => sortVehicles('vehicleNumber')} style={{ padding: '10px', whiteSpace: 'nowrap' }}>
                        <MDBIcon icon="car" className="me-2" /> VEHICLE NUMBER
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={() => sortVehicles('entryTime')} style={{ padding: '10px' }}>
                        <MDBIcon icon="clock" className="me-2" /> ENTRY TIME
                    </MDBDropdownItem>
                    <MDBDropdownItem onClick={() => sortVehicles('exitTime')} style={{ padding: '10px' }}>
                        <MDBIcon icon="clock" className="me-2" /> EXIT TIME
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </div>
    );
}

export default Sort;
