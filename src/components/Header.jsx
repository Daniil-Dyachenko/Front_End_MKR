import React from 'react';
import { FaPenNib, FaUserCircle } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { fetchMe } from '../utils/http';

function Header() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('auth_token');
        const response = await fetchMe(token);
        setUser(response);
      } catch (err) {
        setError('Невдалося завантажити дані');
      }
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  const token = Cookies.get('auth_token');

  const logout = () => {
    Cookies.remove('auth_token');
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <h1 className="header-title">Mojangys</h1>
        </Link>
        <div className="header-user">
          {token ? (
            <div className="logged-in">
              <Link to={`/profile/${user?.username}`} className="user-link">
                <FaUserCircle className="user-icon" />
                <span className="username">{user?.username}</span>
              </Link>
              <Link to={`/create-post/${user?.username}`} className="create-post-button">
                <FaPenNib className="create-icon" />
                Створити пост
              </Link>
              <button onClick={logout} className="logout-button">
                <FiLogOut className="logout-icon" />
                Вийти
              </button>
            </div>
          ) : (
            <div className="login-register">
              <button onClick={() => navigate('/login')} className="login-button">
                <FiLogIn className="login-icon" />
                Увійти
              </button>
              <button onClick={() => navigate('/register')} className="login-button">
                <FiLogIn className="login-icon" />
                Реєстрація
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;