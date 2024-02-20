
import React from 'react';
import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';

export default function SearchBar() {
    return (
        <>
            <MDBInputGroup className='mb-3' noBorder textBefore={<MDBIcon fas icon='search' />}>
                <input className='form-control' type='text' placeholder='Search' />
            </MDBInputGroup>
        </>
    )
}