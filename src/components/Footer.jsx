import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Mojangys. Усі права захищено.</p>
        <div className="footer-links">
          <p><strong>Контакти:</strong> info_mojangys@gmail.com</p>
          <p><strong>Співпраця:</strong> partners_mojangys@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;