import React, { useState } from 'react';

const XPTracker = () => {
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const xpThresholds = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000];

    const handleXpGain = (amount) => {
        const newXp = xp + amount;
        setXp(newXp);
        checkLevelUp(newXp);
    };

    const checkLevelUp = (newXp) => {
        for (let i = 0; i < xpThresholds.length; i++) {
            if (newXp < xpThresholds[i]) {
                setLevel(i);
                break;
            }
        }
    };

    return (
        <div>
            <h2>XP Tracker</h2>
            <p>Current XP: {xp}</p>
            <p>Current Level: {level}</p>
            <button onClick={() => handleXpGain(100)}>Gain 100 XP</button>
            <button onClick={() => handleXpGain(500)}>Gain 500 XP</button>
            <button onClick={() => handleXpGain(1000)}>Gain 1000 XP</button>
        </div>
    );
};

export default XPTracker;