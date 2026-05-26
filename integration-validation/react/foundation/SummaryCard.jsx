import React from 'react';

export default function SummaryCard() {
    return (
        /* Standard Foundation card component containing a metric description block */
        <div className="card">
            <div className="card-section">
                <dl>
                    <dt>Active Users</dt>
                    <dd>1,248</dd>
                </dl>
            </div>
        </div>
    );
}
