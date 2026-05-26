import React, { useState } from 'react';

export default function NavStateExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];

    return (
        /* Stateful header navigation demonstrating Bootstrap 5 responsive collapse bindings */
        <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold">AdminPanel X</span>
                {/* Mobile Hamburger Drawer Trigger */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Responsive Menu Collapse Container */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        {menuItems.map(item => (
                            <li key={item} className="nav-item">
                                <button
                                    onClick={() => {
                                        setActiveTab(item);
                                        setIsOpen(false);
                                    }}
                                    /* Dynamic conditional class definitions for active tab state */
                                    className={`nav-link border-0 bg-transparent ${
                                        activeTab === item ? 'active fw-semibold text-primary' : 'text-secondary'
                                    }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex">
                        <button type="button" className="btn btn-primary">
                            Create New
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
