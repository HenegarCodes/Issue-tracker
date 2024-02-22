import React, { useState } from 'react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };
}
    
    export default Login;