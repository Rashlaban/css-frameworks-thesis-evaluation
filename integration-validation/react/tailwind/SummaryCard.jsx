import React from 'react';

export default function SummaryCard() {
    return (
        /* Static classes representing a clean, modern card container with a definition list */
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <dl className="m-0">
                <dt className="text-gray-500 text-sm font-medium mb-1 truncate">Active Users</dt>
                <dd className="text-3xl font-semibold text-gray-900 m-0">1,248</dd>
            </dl>
        </div>
    );
}
