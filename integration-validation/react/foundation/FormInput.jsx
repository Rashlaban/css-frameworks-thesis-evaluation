import React from 'react';

export default function FormInput() {
    return (
        /* Form group using Foundation's high-contrast label and input controls */
        <div>
            <label htmlFor="fullname">
                Full Name
            </label>
            <input 
                type="text" 
                id="fullname" 
                placeholder="Enter full name" 
            />
        </div>
    );
}
