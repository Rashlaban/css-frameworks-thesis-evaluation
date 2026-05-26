import React from 'react';

export default function FormInput() {
    return (
        /* Form control field built with Bulma's semantic wrapper element classes */
        <div className="field">
            <label htmlFor="fullname" className="label">
                Full Name
            </label>
            <div className="control">
                <input 
                    type="text" 
                    id="fullname" 
                    placeholder="Enter full name" 
                    className="input"
                />
            </div>
        </div>
    );
}
