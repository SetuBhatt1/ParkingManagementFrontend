import React from 'react';
import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function SearchBar() {
    return (
        <>
            <MDBInputGroup className='square border border-0' style={{ width: '50vw' }}>
                <input className='form-control w-50' type='text' placeholder='Search' />
                <MDBIcon fas icon='search' className='p-2 border border-0' size='1x' style={{ backgroundColor: "#7986CB" }} />
            </MDBInputGroup>
        </>
    )
}
