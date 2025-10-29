// pages/loginpage.tsx

import React from 'react';
// 💡 The correct relative path is '../components/login'
import LoginPageComponent from '../components/login'; 

/**
 * The page component for the /loginpage route.
 * It is responsible for rendering the Login component.
 * * NOTE: In Next.js pages router, files inside 'pages' (like this one) 
 * are automatically treated as pages.
 */
const LoginPage: React.FC = () => {
  return (
    // We render the Login component from the components folder
    <LoginPageComponent />
  );
}

export default LoginPage;