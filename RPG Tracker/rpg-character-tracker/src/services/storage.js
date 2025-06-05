import { useEffect } from 'react';

const STORAGE_KEY = 'rpgCharacterData';

export const saveCharacterData = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getCharacterData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
};

export const clearCharacterData = () => {
    localStorage.removeItem(STORAGE_KEY);
};

export const useCharacterData = (initialData) => {
    useEffect(() => {
        const storedData = getCharacterData();
        if (storedData) {
            initialData(storedData);
        }
    }, [initialData]);
};