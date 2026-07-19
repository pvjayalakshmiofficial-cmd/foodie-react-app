import React from "react";
import { Link } from "react-router-dom";
import { memo } from "react";
// use public image to avoid bundler SVG import issues

function Navbar({ cartCount = 0, favoritesCount = 0, darkMode = false, toggleDarkMode }) {
    return (
        <nav className="navbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/images/Logo.png" alt="Delicious" className="nav-logo" />

                <div>
                    <h2 style={{ margin: 0 }}>Get Great Food!</h2>
                    <small style={{ opacity: 0.9 }}>Order delicious meals delivered to your door</small>
                </div>
            </div>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/foods">Foods</Link>
                <Link to="/cart">Cart ({cartCount})</Link>
                <Link to="/favorites">Wishlist ({favoritesCount})</Link>
                <Link to="/tracking">Order Tracking</Link>
                <Link to="/contact">Contact</Link>
                <button className="dark-toggle" onClick={toggleDarkMode} aria-label="Toggle theme">{darkMode ? '🌙' : '☀️'}</button>
            </div>
        </nav>
    );
}

export default memo(Navbar);