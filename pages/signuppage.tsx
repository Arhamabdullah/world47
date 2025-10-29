// pages/signuppage.tsx

import React from 'react';
// 💡 We import the full, multi-step application component
import SignupApp from '../components/SignupApp'; 

/**
 * The page component for the /signuppage route.
 * It is responsible for rendering the multi-step SignupApp component.
 * In Next.js (or similar routers), this file makes the content available
 * at the corresponding URL (e.g., /signuppage).
 */
const SignupPage: React.FC = () => {
  return (
    // We render the main application component which contains all the UI logic.
    <SignupApp />
  );
}

export default SignupPage;