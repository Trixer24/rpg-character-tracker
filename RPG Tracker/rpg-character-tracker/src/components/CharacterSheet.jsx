import React, { useState } from 'react';

const CharacterSheet = () => {
    const [character, setCharacter] = useState({
        name: '',
        race: '',
        class: '',
        stats: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        },
        traits: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in character.stats) {
            setCharacter({
                ...character,
                stats: {
                    ...character.stats,
                    [name]: value,
                },
            });
        } else {
            setCharacter({
                ...character,
                [name]: value,
            });
        }
    };

    return (
        <div>
            <h2>Character Sheet</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={character.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Race:</label>
                    <input type="text" name="race" value={character.race} onChange={handleChange} />
                </div>
                <div>
                    <label>Class:</label>
                    <input type="text" name="class" value={character.class} onChange={handleChange} />
                </div>
                <div>
                    <h3>Stats</h3>
                    {Object.keys(character.stats).map((stat) => (
                        <div key={stat}>
                            <label>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</label>
                            <input type="number" name={stat} value={character.stats[stat]} onChange={handleChange} />
                        </div>
                    ))}
                </div>
                <div>
                    <label>Traits:</label>
                    <textarea name="traits" value={character.traits} onChange={handleChange} />
                </div>
            </form>
        </div>
    );
};

export default CharacterSheet;