export type CharacterId = string | number;
export type CharacterParams = {
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};
export type Character = {
  id: CharacterId;
  name: string;
  parameters: CharacterParams;
  level: number;
  assignToTask?: string;
};
