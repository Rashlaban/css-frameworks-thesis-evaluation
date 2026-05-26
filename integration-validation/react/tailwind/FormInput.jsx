import React from 'react';

export default function FormInput() {
    return (
        /* Form group containing label and input elements with typical Tailwind styling utilities */
        <div className="mb-4">
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
            </label>
            <input 
                type="text" 
                id="fullname" 
                placeholder="Enter full name" 
                className="block w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
        </div>
    );
}
