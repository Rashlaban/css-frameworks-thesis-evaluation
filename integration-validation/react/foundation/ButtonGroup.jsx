import React from 'react';

export default function ButtonGroup() {
    return (
        /* Dynamic action button overrides using Foundation's built-in button-group classes */
        <div className="button-group">
            <button type="submit" className="button">
                Submit
            </button>
            <button type="button" className="button secondary">
                Cancel
            </button>
        </div>
    );
}
