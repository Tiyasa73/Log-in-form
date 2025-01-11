import React, { useState } from 'react';

function Form() {
  const [currentForm, setCurrentForm] = useState('login'); // Tracks form: 'login', 'signup', 'forgotPassword'
  const [currentStep, setCurrentStep] = useState('enterEmail'); // Tracks forgot password steps
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleForgotPassword = () => {
    setCurrentForm('forgotPassword');
    setCurrentStep('enterEmail');
  };

  const handleBackToLogin = () => {
    setCurrentForm('login');
  };

  const handleEmailSubmit = () => {
    // Simulate sending verification code
    console.log('Sending verification code to:', email);
    setCurrentStep('enterCode');
  };

  const handleCodeSubmit = () => {
    // Simulate verifying code
    console.log('Verification code submitted:', verificationCode);
    setCurrentStep('resetPassword');
  };

  const handlePasswordReset = () => {
    // Simulate password reset
    console.log('Password reset for email:', email, 'New Password:', newPassword);
    alert('Password reset successful!');
    setCurrentForm('login'); // Go back to login
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={currentForm === 'login' ? 'active' : ''}
            onClick={() => setCurrentForm('login')}
          >
            Login
          </button>
          <button
            className={currentForm === 'signup' ? 'active' : ''}
            onClick={() => setCurrentForm('signup')}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {currentForm === 'login' && (
          <div className="form">
            <h2>Login Form</h2>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
            <a href="#" onClick={handleForgotPassword}>
              Forgot password?
            </a>
            <button>Login</button>
          </div>
        )}

        {/* Sign Up Form */}
        {currentForm === 'signup' && (
          <div className="form">
            <h2>Sign Up Form</h2>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
            <button>Sign Up</button>
          </div>
        )}

        {/* Forgot Password Workflow */}
        {currentForm === 'forgotPassword' && (
          <div className="form">
            <h2>Forgot Password</h2>

            {currentStep === 'enterEmail' && (
              <>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button onClick={handleEmailSubmit}>Send Verification Code</button>
              </>
            )}

            {currentStep === 'enterCode' && (
              <>
                <input
                  type="text"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
                <button onClick={handleCodeSubmit}>Verify Code</button>
              </>
            )}

            {currentStep === 'resetPassword' && (
              <>
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button onClick={handlePasswordReset}>Reset Password</button>
              </>
            )}

            <p>
              Remembered your password?{' '}
              <a href="#" onClick={handleBackToLogin}>
                Back to Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
