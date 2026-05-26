import React from 'react';

export default function SummaryCard() {
    return (
        /* Bootstrap 5 card component representing metrics summary card */
        <div className="card shadow-sm">
            <div className="card-body">
                <dl className="mb-0">
                    <dt className="text-secondary small fw-medium mb-1 text-truncate">Active Users</dt>
                    <dd className="fs-3 fw-semibold text-dark mb-0">1,248</dd>
                </dl>
            </div>
        </div>
    );
}
