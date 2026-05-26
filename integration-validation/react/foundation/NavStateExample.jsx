import React, { useState } from 'react';

export default function NavStateExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];

    return (
        /* Stateful top-bar navigation demonstrating Foundation's header menu responsive bindings */
        <nav className="top-bar-container">
            {/* Mobile Title Bar */}
            <div className="title-bar" style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem' }}>
                <span className="title-bar-title font-bold text-white">AdminPanel X</span>
                <button 
                    className="menu-icon dark border-0 bg-transparent" 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                ></button>
            </div>
            {/* Responsive Menu Area */}
            <div className={`top-bar ${isOpen ? 'show-menu' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="top-bar-left">
                    <ul className="menu vertical medium-horizontal">
                        <li className="menu-text hide-for-small-only">AdminPanel X</li>
                        {menuItems.map(item => (
                            <li key={item} className={activeTab === item ? 'active' : ''}>
                                <button
                                    onClick={() => {
                                        setActiveTab(item);
                                        setIsOpen(false);
                                    }}
                                    className="button clear margin-0"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu vertical medium-horizontal">
                        <li>
                            <button type="button" className="button">
                                Create New
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
