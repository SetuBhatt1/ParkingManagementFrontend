import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Adjust the import path as necessary

const ProtectedRoute = ({ children }) => {
 const navigate = useNavigate();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoading(false);
      } else {
        navigate('/'); // Redirect to home if not authenticated
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
 }, [navigate]);

 // Wait for the authentication state to be determined
 if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
 }

 // Render children if authenticated
 return children;
};

export default ProtectedRoute;
