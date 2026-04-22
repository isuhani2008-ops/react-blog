import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import '../App.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/bollywood", label: "Bollywood" },
        { to: "/hollywood", label: "Hollywood" },
        { to: "/technology", label: "Technology" },
        { to: "/fitness", label: "Fitness" },
        { to: "/food", label: "Food" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-icon">◈</span>
                <span className="brand-name">PulseMedia</span>
            </div>

            <button
                className={`hamburger ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
                {navLinks.map(({ to, label }) => (
                    <li key={to} className="nav-item">
                        <Link
                            to={to}
                            className={`nav-link ${location.pathname === to ? 'active' : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            <span className="nav-label">{label}</span>
                            <span className="nav-underline"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar