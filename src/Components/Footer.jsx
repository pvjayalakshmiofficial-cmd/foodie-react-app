import React from 'react';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <strong>Foodie</strong>
          <div className="footer-email"><a href="mailto:orders@foodie.com">orders@foodie.com</a></div>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.1c0-2.2 1.3-3.4 3.2-3.4.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.9A4.1 4.1 0 1016.1 12 4.1 4.1 0 0012 7.9zm6.4-.4a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23 7s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.5 4 12 4 12 4s-4.5 0-8.1.1c-.4 0-1.3 0-2.1.9C1.2 5.6 1 7 1 7S1 8.8 1 10.6v2.8C1 16.2 1.2 18 1.2 18s.2 1.4.8 2c.8.8 1.9.8 2.4.9C7.5 21 12 21 12 21s4.5 0 8.1-.1c.4 0 1.6 0 2.4-.9.6-.6.8-2 .8-2s.2-1.8.2-3.6V10.6C23 8.8 23 7 23 7zM9.8 15.6V8.4L16 12l-6.2 3.6z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
