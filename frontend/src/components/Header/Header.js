import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>My Shop</h1>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href=".products">Products</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <div className="header-actions">
                <a href="/login" className="button">Login</a>
            </div>
        </header>
    );
};

export default Header;