import React from 'react';

export default function SummaryCard() {
    return (
        /* Bulma box component displaying metric labels and title metrics styling */
        <div className="box">
            <dl>
                <dt className="has-text-grey is-size-7 mb-1">Active Users</dt>
                <dd className="title is-3 mb-0">1,248</dd>
            </dl>
        </div>
    );
}
