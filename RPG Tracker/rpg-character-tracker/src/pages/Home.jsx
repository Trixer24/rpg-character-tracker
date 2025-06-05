import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the RPG Character Tracker</h1>
            <p>Manage your tabletop RPG characters with ease!</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/character">Character Sheet</Link>
                    </li>
                    <li>
                        <Link to="/inventory">Inventory Manager</Link>
                    </li>
                    <li>
                        <Link to="/spells">Spell Manager</Link>
                    </li>
                    <li>
                        <Link to="/xp">XP Tracker</Link>
                    </li>
                    <li>
                        <Link to="/session-journal">Session Journal</Link>
                    </li>
                    <li>
                        <Link to="/timeline">Timeline View</Link>
                    </li>
                    <li>
                        <Link to="/import-export">Import/Export</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;