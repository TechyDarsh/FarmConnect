// src/components/ProtectedPage.js
import React, { useEffect, useState } from 'react';

const ProtectedPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally verify token with backend
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  if (!authenticated) {
    return <div>You need to log in to access this page.</div>;
  }

  return <div>Welcome to the protected page!</div>;
};

export default ProtectedPage;
