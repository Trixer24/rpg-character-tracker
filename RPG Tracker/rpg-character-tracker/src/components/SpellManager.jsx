import React, { useState } from 'react';

const SpellManager = () => {
    const [spells, setSpells] = useState([]);
    const [spellName, setSpellName] = useState('');
    const [spellCharges, setSpellCharges] = useState(0);
    const [spellSlots, setSpellSlots] = useState(0);

    const addSpell = () => {
        if (spellName) {
            setSpells([...spells, { name: spellName, charges: spellCharges, slots: spellSlots }]);
            setSpellName('');
            setSpellCharges(0);
            setSpellSlots(0);
        }
    };

    const removeSpell = (index) => {
        const newSpells = spells.filter((_, i) => i !== index);
        setSpells(newSpells);
    };

    return (
        <div>
            <h2>Spell Manager</h2>
            <input
                type="text"
                placeholder="Spell Name"
                value={spellName}
                onChange={(e) => setSpellName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Charges"
                value={spellCharges}
                onChange={(e) => setSpellCharges(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Spell Slots"
                value={spellSlots}
                onChange={(e) => setSpellSlots(Number(e.target.value))}
            />
            <button onClick={addSpell}>Add Spell</button>
            <ul>
                {spells.map((spell, index) => (
                    <li key={index}>
                        {spell.name} - Charges: {spell.charges}, Slots: {spell.slots}
                        <button onClick={() => removeSpell(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpellManager;