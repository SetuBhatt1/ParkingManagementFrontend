import {
    MDBBtn,
    MDBIcon, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from 'mdb-react-ui-kit';

const Filter = () => {
    return (
        <>
            <MDBDropdown>
                <MDBDropdownToggle>
                    Filter By
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Car Number</MDBDropdownItem>
                    <MDBDropdownItem link>Date</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </>
    )
}

export default Filter;
