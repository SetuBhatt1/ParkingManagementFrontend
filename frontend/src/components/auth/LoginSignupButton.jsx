import React, { useState } from 'react';
import {
    MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBRow,
    MDBCol, MDBBtn, MDBIcon, MDBInput, MDBCheckbox
} from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginSignupButton = () => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPwd, setLoginPwd] = useState('')

    const [signupEmail, setSignupEmail] = useState('')
    const [signupPwd, setSignupPwd] = useState('')

    const navigate = useNavigate();

    const [loginRegisterActive, setLoginRegisterActive] = useState('login');

    const handleLoginRegisterClick = (tab) => {
        setLoginRegisterActive(tab);
    };

    const LoginSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, loginEmail, loginPwd)
            .then((userCredential) => {
                console.log(userCredential)
                navigate('/dashboard');
            }).catch((error) => {
                console.log(error)
            })
    }

    const SignupSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,signupEmail,signupPwd)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: '#333' }}>
                Let's get you parked!!
            </h2>
            <MDBTabs pills justify className='mb-3'>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleLoginRegisterClick('login')}
                        active={loginRegisterActive === 'login'}
                        style={{ color: '#007bff', borderColor: loginRegisterActive === 'login' ? '#000' : '#007bff' }}
                    >
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink
                        onClick={() => handleLoginRegisterClick('register')}
                        active={loginRegisterActive === 'register'}
                        style={{ color: '#007bff', borderColor: '#007bff' }}
                    >
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <div>
                {loginRegisterActive === 'login' && (
                    <div>
                        <form onSubmit={LoginSubmit}>
                            {/* <div className='text-center mb-3'>
                                <p>Sign up with:</p>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='google' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='github' />
                                </MDBBtn>
                            </div>
                            <p className='text-center'>or:</p> */}
                            <MDBInput className='mb-4' type='email' id='form7Example1' label='Email address' style={{ backgroundColor: '#f8f9fa', height: '50px', color: '#333', borderColor: '#333' }} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                            <MDBInput className='mb-4' type='password' id='form7Example2' label='Password' style={{ backgroundColor: '#f8f9fa', height: '50px', color: '#333', borderColor: '#333' }} value={loginPwd} onChange={(e) => setLoginPwd(e.target.value)} />
                            <MDBBtn type='submit' className='mb-4' block color="primary" >
                                Login
                            </MDBBtn>
                        </form>
                    </div>
                )}
                {loginRegisterActive === 'register' && (
                    <div>
                        <form onSubmit={SignupSubmit}>
                            {/* <div className='text-center mb-3'>
                                <p>Sign up with:</p>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='google' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>
                                <MDBBtn floating color="secondary" className='mx-1'>
                                    <MDBIcon fab icon='github' />
                                </MDBBtn>
                            </div>
                            <p className='text-center'>or:</p> */}
                            <MDBInput className='mb-4' type='email' id='form8Example3' label='Email address' style={{ backgroundColor: '#f8f9fa', height: '50px', color: '#333', borderColor: '#333' }} value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
                            <MDBInput className='mb-4' type='password' id='form8Example4' label='Password' style={{ backgroundColor: '#f8f9fa', height: '50px', color: '#333', borderColor: '#333' }} value={signupPwd} onChange={(e) => setSignupPwd(e.target.value)} />
                            <MDBBtn type='submit' className='mb-4' block color="primary" >
                                Signup
                            </MDBBtn>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginSignupButton;
