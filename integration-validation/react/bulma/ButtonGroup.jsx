import React from 'react';

export default function ButtonGroup() {
    return (
        /* Action buttons grouping leveraging Bulma's inline button layout style classes */
        <div className="buttons">
            <button type="submit" className="button is-primary">
                Submit
            </button>
            <button type="button" className="button is-light">
                Cancel
            </button>
        </div>
    );
}
