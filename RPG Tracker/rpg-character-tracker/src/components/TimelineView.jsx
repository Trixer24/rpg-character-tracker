import React from 'react';

const TimelineView = ({ sessions }) => {
    return (
        <div className="timeline-view">
            <h2>Session Timeline</h2>
            <ul>
                {sessions.map((session, index) => (
                    <li key={index}>
                        <h3>{session.date}</h3>
                        <p>{session.notes}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TimelineView;