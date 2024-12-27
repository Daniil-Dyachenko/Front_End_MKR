import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchRegister } from '../utils/http';

import GoogleIcon from '../assets/icons/google.svg';
import GithubIcon from '../assets/icons/github.svg';
import TelegramIcon from '../assets/icons/telegram.svg';

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetchRegister(username, password, fullName);
      setSuccess(true);
      console.log(response);
      navigate('/login');
    } catch (err) {
      setError('Не вдалося зареєструватися. Перевірте введені дані.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-image">
          <img src="/images/register-top.jpg" alt="Top Illustration" />
        </div>
        <div className="register-form-container">
          <h1 className="register-title">Реєстрація</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Повне ім'я</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Ваше повне ім'я"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Ім'я користувача</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Ваше ім'я користувача"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Ваш пароль"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Реєстрація успішна!</p>}
            <button type="submit" className="register-button">
              Зареєструватися
            </button>
          </form>
          <div className="alternative-register">
            <p>Або зареєструйтеся за допомогою:</p>
            <div className="social-buttons">
              <button className="social-button google">
                <img src={GoogleIcon} alt="Google Icon" />
                Google
              </button>
              <button className="social-button github">
                <img src={GithubIcon} alt="GitHub Icon" />
                GitHub
              </button>
              <button className="social-button telegram">
                <img src={TelegramIcon} alt="Telegram Icon" />
                Telegram
              </button>
            </div>
          </div>
          <div className="login-link">
            <p>
              Маєте вже акаунт?{' '}
              <a href="/login" className="login-link-text">
                Увійдіть
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
