import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or signup logic here using email, password, and confirmPassword state values
    if (isLogin) {
      // Handle login
    } else {
      // Handle signup
    }
  };

  return (
    <div className="login-form">
    <form onSubmit={handleSubmit}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {!isLogin && (
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
      )}
      <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
    </form>
    <p onClick={handleToggleForm}>{isLogin ? 'Create Account' : 'Login'}</p>
  </div>
  );
}
    
    export default Login;