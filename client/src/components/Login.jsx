import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(false);
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
      {!isLogin && (
        <button onClick={handleToggleForm}>Login</button>
      )}
      {isLogin && (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          <p onClick={handleToggleForm}>Create Account</p>
        </form>
      )}
    </div>
  );
}
    export default Login;