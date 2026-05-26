import React from 'react';

export default function ButtonGroup() {
    return (
        /* Dynamic action buttons enclosed in a responsive flex layout container */
        <div className="flex gap-3">
            <button 
                type="submit" 
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium transition-colors"
            >
                Submit
            </button>
            <button 
                type="button" 
                className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-md text-sm font-medium transition-colors"
            >
                Cancel
            </button>
        </div>
    );
}
