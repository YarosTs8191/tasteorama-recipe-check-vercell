import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  type: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.type = action.payload?.type;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.type = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;