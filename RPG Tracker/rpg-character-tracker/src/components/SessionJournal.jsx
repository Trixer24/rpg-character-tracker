import React, { useState } from 'react';

const SessionJournal = () => {
    const [sessions, setSessions] = useState([]);
    const [currentNote, setCurrentNote] = useState('');

    const handleNoteChange = (event) => {
        setCurrentNote(event.target.value);
    };

    const handleSaveNote = () => {
        if (currentNote.trim()) {
            setSessions([...sessions, currentNote]);
            setCurrentNote('');
        }
    };

    return (
        <div>
            <h2>Session Journal</h2>
            <textarea
                value={currentNote}
                onChange={handleNoteChange}
                placeholder="Write your session notes here..."
            />
            <button onClick={handleSaveNote}>Save Note</button>
            <h3>Past Sessions</h3>
            <ul>
                {sessions.map((session, index) => (
                    <li key={index}>{session}</li>
                ))}
            </ul>
        </div>
    );
};

export default SessionJournal;