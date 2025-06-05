export interface Character {
  id: string;
  name: string;
  race: string;
  class: string;
  stats: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  traits: string[];
  level: number;
  experience: number;
}

export interface Item {
  id: string;
  name: string;
  quantity: number;
}

export interface Spell {
  id: string;
  name: string;
  level: number;
  charges: number;
  maxCharges: number;
}

export interface SessionNote {
  id: string;
  date: string;
  content: string;
}