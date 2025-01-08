import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener("change",documentChangeHandler);
        return () => mediaQueryList.removeEventListener("change",documentChangeHandler);
    }, [query]);

    return matches;
};


const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenutToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };


    return (
        <header className="header">
            <div className="logo">
                <h1>My Shop</h1>
            </div>
            {!isMobile && (
                <nav className="header-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            )}
            
            <div className="header-actions">
                <a href="/login" className="button">Login</a>
            </div>
            {isMobile && (
                <div className="mobile-menu">
                    <button 
                    className="mobile-menu-button"
                    onClick={handleMenutToggle}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle mobile menu"                
                    >
                        ☰
                    </button>
                    {isMenuOpen && (
                        <div className="mobile-menu-content">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/products">Products</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Header;