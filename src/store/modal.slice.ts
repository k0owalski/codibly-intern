import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ModalDataState {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ModalState {
  isAcitve: boolean;
  data: ModalDataState;
}

const initialState: ModalState = {
  isAcitve: false,
  data: {
    id: 0,
    name: '',
    year: 0,
    color: '',
    pantone_value: '',
  },
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<ModalState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setModal } = modalSlice.actions;

export default modalSlice.reducer;
