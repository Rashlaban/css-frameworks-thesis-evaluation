import React, { useState } from 'react';

export default function NavStateExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Dashboard');

    const menuItems = ['Dashboard', 'Reports', 'Users', 'Settings'];

    return (
        /* Stateful component container representing header and dynamic mobile menu state */
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-bold text-gray-800 text-lg">AdminPanel X</span>
                        </div>
                        {/* Desktop Horizontal Menu */}
                        <div className="hidden md:flex md:space-x-8 md:ml-10 items-center">
                            {menuItems.map(item => (
                                <button
                                    key={item}
                                    onClick={() => setActiveTab(item)}
                                    /* Dynamic conditional class bindings based on state */
                                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                        activeTab === item 
                                            ? 'bg-indigo-50 text-indigo-600' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="hidden md:flex items-center">
                        <button type="button" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">
                            Create New
                        </button>
                    </div>
                    {/* Mobile Menu Toggler Toggle Action */}
                    <div className="flex items-center md:hidden">
                        <button 
                            type="button" 
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Conditional Mobile Dropdown Menu Drawer */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {menuItems.map(item => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveTab(item);
                                setIsOpen(false);
                            }}
                            /* Conditional styles for active mobile elements */
                            className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                                activeTab === item 
                                    ? 'bg-indigo-50 text-indigo-600' 
                                    : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                    <div className="pt-2 px-3">
                        <button type="button" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium">
                            Create New
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
