import { MDBInputGroup, MDBIcon } from 'mdb-react-ui-kit';
import Divider from './Divider';

export default function Form() {
    return (
        <>
            <p className='fs-3'>Create an account</p>

            <button className='m-2' style={{ backgroundColor: "#BBDEFB" }}>
                <MDBIcon className='p-2' fab icon="google" />
                Signup with Google
            </button>

            <center>
                <Divider text="OR" />

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='text' placeholder="Name" />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='email' placeholder="Email" />
                </MDBInputGroup>

                <MDBInputGroup className='mb-3 w-75'>
                    <input className='form-control' type='password' placeholder="Password" />
                </MDBInputGroup>
            </center>

            <button className='m-2' style={{ backgroundColor: "#BBDEFB" }}>
                Signup with Email
            </button>

        </>
    )
}