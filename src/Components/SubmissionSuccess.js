import React from 'react';
import { useLocation } from 'react-router-dom';

const SubmissionSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="text-center mt-5">
      <h1>Thank you, {state.name}!</h1>
      <p>Your message has been sent successfully.</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Message:</strong> {state.message}</p>
    </div>
  );
};

export default SubmissionSuccess;