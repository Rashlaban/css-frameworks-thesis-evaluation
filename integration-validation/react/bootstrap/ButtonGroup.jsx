import React from 'react';

export default function ButtonGroup() {
    return (
        /* Button layout spacing utilizing Bootstrap 5 d-flex and gap utility classes */
        <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <button type="button" className="btn btn-secondary">
                Cancel
            </button>
        </div>
    );
}
