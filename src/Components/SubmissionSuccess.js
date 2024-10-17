import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const SubmissionSuccess = () => {
  const { state } = useLocation();

  return (
    <div className="text-center mt-5">
      <h1>Thank you, <b>{state.name}</b>!</h1>
      <p>Your message has been sent successfully.</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Message:</strong> {state.message}</p>
      <div className="made-with-react mt-5">
        <p>Made with<FaReact className="react-logo" /><a href="https://react.dev/"><span><b>React</b></span></a></p>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
