import React, { useState } from 'react';
import { fetchLogin } from '../utils/http';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(null);
      const response = await fetchLogin({ username, password });
      console.log(response);
      navigate('/');
    } catch (err) {
      setError('Невірний логін або пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img src="/images/login-image.jpg" alt="Welcome to KPI-tter" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Вхід до Mojangys</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Ім'я користувача</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введіть ім'я користувача"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введіть пароль"
            />
          </div>
          <button type="submit" className="login-button">
            Увійти
          </button>
          <p className="signup-link">
            Ще не маєте акаунта? <a href="/register">Зареєструватися</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;