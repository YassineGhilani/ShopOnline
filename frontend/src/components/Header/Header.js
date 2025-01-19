import React from "react";
import "./Header.css";
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const documentChangeHandler = () => setMatches(mediaQueryList.matches);

        mediaQueryList.addEventListener("change", documentChangeHandler);
        return () => mediaQueryList.removeEventListener("change", documentChangeHandler);
    }, [query]);

    return matches;
};


const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };


    return (
        <header className="header">
            <div className="logo">
                <a href="/">
                    <span>My Shop</ span>
                </a>
            </div>
            {!isMobile && (
                <div className="default-menu">
                    <nav className="header-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                    </nav>
                </div>
            )}
            {!isMobile && (
                <div className="header-actions">
                    <a href="/login" className="button">Login</a>
                </div>
            )}
            {isMobile && (
                <div id="menuToggle" className="mobile-menu">
                    <input
                        id="menu-checkbox"
                        type="checkbox"
                        checked={isMenuOpen}
                        onChange={handleMenuToggle} />
                    <label htmlFor="menu-checkbox">
                        {isMenuOpen ? <span className="open-span">&#10005;</span> : <span className="closed-span">&#9776;</span>}
                    </label>
                    <ul id="menu" className={isMenuOpen ? "menu-open" : "menu-closed"}>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;