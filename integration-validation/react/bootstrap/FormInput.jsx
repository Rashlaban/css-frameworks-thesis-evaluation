import React from 'react';

export default function FormInput() {
    return (
        /* Form control field with standard Bootstrap 5.3 form labels and form-control class */
        <div className="mb-3">
            <label htmlFor="fullname" className="form-label">
                Full Name
            </label>
            <input 
                type="text" 
                id="fullname" 
                placeholder="Enter full name" 
                className="form-control"
            />
        </div>
    );
}
