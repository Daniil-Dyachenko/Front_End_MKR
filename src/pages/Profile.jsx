import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserInfo, getUserPosts } from '../utils/http';
import Cookies from 'js-cookie';

function Profile() {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = Cookies.get('auth_token');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${username} - Профіль`;

    const fetchData = async () => {
      try {
        const [userInfoData, userPostsData] = await Promise.all([
          getUserInfo(username),
          getUserPosts(username, token),
        ]);
        setUserInfo(userInfoData);
        setUserPosts(userPostsData);
      } catch (err) {
        setError('Неможливо завантажити дані.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [username, token]);

  if (isLoading) {
    return <div className="loading">Завантаження...</div>;
  }

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile-header">
          <h1 className="profile-username">{userInfo?.full_name || username}</h1>
          <p className="profile-bio">{userInfo?.bio || 'Опис профілю відсутній.'}</p>
        </div>
        {error ? (
          <div className="error">
            <span className="error-message">Такого користувача не існує</span>
          </div>
        ) : (
          <div className="profile-posts">
            <h2>Пости користувача</h2>
            {userPosts.length > 0 ? (
              <ul className="posts-list">
                {userPosts.map((post) => (
                  <li
                    key={post.id}
                    className="post-item"
                    onClick={() => navigate(`/post/${post.author.username}/${post.id}`)}
                  >
                    <div className="post-header">
                      <h3 className="post-author">{post.author.full_name}</h3>
                      <span className="post-author-username">@{post.author.username}</span>
                    </div>
                    <p className="post-content">{post.content}</p>
                    <div className="post-info">
                      <span className="post-likes">❤️ {post.likes}</span>
                      <span className="post-liked">
                        {post.is_liked ? 'Вам сподобалось' : 'Вам не сподобалось'}
                      </span>
                      <span className="post-created-at">
                        {new Date(post.created_at).toLocaleString()}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-posts">У користувача немає постів.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
