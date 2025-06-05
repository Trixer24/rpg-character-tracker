import { saveAs } from 'file-saver';

export const exportToJSON = (characterData) => {
    const json = JSON.stringify(characterData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, 'character.json');
};

export const exportToPDF = (characterData) => {
    const doc = new jsPDF();
    doc.text('Character Data', 10, 10);
    
    let y = 20;
    for (const [key, value] of Object.entries(characterData)) {
        doc.text(`${key}: ${value}`, 10, y);
        y += 10;
    }
    
    doc.save('character.pdf');
};