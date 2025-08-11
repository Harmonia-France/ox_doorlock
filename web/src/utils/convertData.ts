import { DoorColumn } from '../store/doors';
import { StoreState } from '../store';

// Converts groups data into array format
export const convertData = (data: DoorColumn) => {
  return {
    ...data,
    lockpickDifficulty: data.lockpickDifficulty || [''],
  } as StoreState;
};
