import React from 'react';
import { fetchPost } from '../utils/http';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import Cookies from 'js-cookie';
import Header from '../components/Header';
import { FaHeart } from 'react-icons/fa'; 

function FullPost() {
  const { username, post_id } = useParams();

  const [post, setPost] = React.useState(null);
  const [isLiking, setIsLiking] = React.useState(false);
  const token = Cookies.get('auth_token');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPost(username, token, post_id);
        setPost(response);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchData();
  }, [username, post_id, token]);

  const toggleLike = async () => {
    setIsLiking(true);
    const url = `/users/${username}/posts/${post_id}/like`;

    try {
      if (post.is_liked) {
        await axios.delete(url, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        });
        setPost((prev) => ({ ...prev, is_liked: false, likes: prev.likes - 1 }));
      } else {
        await axios.put(
          url,
          {},
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        setPost((prev) => ({ ...prev, is_liked: true, likes: prev.likes + 1 }));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setIsLiking(false);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="full-post">
        <h1 className="post-title">{post.content}</h1>
        <div className="post-author">
          <span className="author-name">{post.author.full_name}</span>
          <span className="author-username">@{post.author.username}</span>
        </div>
        <div className="post-footer">
          <div className="likes">
            <button
              className={`like-button ${post.is_liked ? 'liked' : ''}`}
              onClick={toggleLike}
              disabled={isLiking}>
              <FaHeart className={`like-icon ${post.is_liked ? 'liked' : ''}`} />
              {post.is_liked ? 'Забрати' : 'Лайк'} ({post.likes})
            </button>
          </div>
          <div className="actions">
            <button className="action-button">Коментарі</button>
            <button className="action-button">Поділитися</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullPost;
