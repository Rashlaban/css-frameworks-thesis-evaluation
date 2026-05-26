import React, { useState } from 'react';

export default function NavStateExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];

    return (
        /* Stateful navbar layout demonstrating Bulma's hamburger is-active toggles */
        <nav className="navbar is-white border-bottom" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <span className="navbar-item font-weight-bold">AdminPanel X</span>
                {/* Bulma Burger mobile menu button toggler */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`navbar-burger burger border-0 bg-transparent ${isOpen ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
            {/* Stateful responsive slide-out navbar-menu drawer */}
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    {menuItems.map(item => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveTab(item);
                                setIsOpen(false);
                            }}
                            /* Dynamically applying Bulma active classes based on state */
                            className={`navbar-item border-0 bg-transparent text-left ${
                                activeTab === item ? 'is-active has-text-primary' : 'has-text-grey'
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button type="button" className="button is-primary">
                                Create New
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
