import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 

const ProtectedRoute = ({ children }) => {
 const navigate = useNavigate();
 const currentUser = auth.currentUser;

 React.useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
 }, [currentUser, navigate]);

 return currentUser ? children : null;
};

export default ProtectedRoute;
