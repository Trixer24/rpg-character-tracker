import React from 'react';
import CharacterSheet from '../components/CharacterSheet';
import InventoryManager from '../components/InventoryManager';
import SpellManager from '../components/SpellManager';
import XPTracker from '../components/XPTracker';
import SessionJournal from '../components/SessionJournal';
import TimelineView from '../components/TimelineView';

const Character = () => {
    return (
        <div>
            <h1>Character Management</h1>
            <CharacterSheet />
            <InventoryManager />
            <SpellManager />
            <XPTracker />
            <SessionJournal />
            <TimelineView />
        </div>
    );
};

export default Character;