import {
    MDBBtn,
    MDBIcon, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from 'mdb-react-ui-kit';

const Filter = () => {
    return (
        <>
            <MDBDropdown>
                <MDBDropdownToggle>
                    Sort By
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Floor Number</MDBDropdownItem>
                    <MDBDropdownItem link>Entry/Exit Date</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
        </>
    )
}

export default Filter;
