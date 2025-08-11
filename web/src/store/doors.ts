import create from 'zustand';
import type { StoreState } from './';

export interface DoorColumn extends Omit<StoreState, 'groups'> {
  id: number;
  name: string;
  key_id: string;
  zone: string;
}

export const useDoors = create<{ doors: DoorColumn[]; setDoors: (value: DoorColumn[]) => void }>((set) => ({
  doors: [],
  setDoors: (doors: DoorColumn[]) => set({ doors }),
}));
