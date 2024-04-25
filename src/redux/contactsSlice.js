import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = {
    contacts:{ items: []}
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  reducers: {
      addContact(state, action) {
        state.contacts.items.push(action.payload);
    },
      deleteContact(state, action) {
        // state.contacts = state.contacts.filter(
        //   (contact) => contact.id !== action.payload
        // );
          const contactIdx = state.contacts.items.findIndex(contact => contact.id === action.payload);
          state.contacts.items.splice(contactIdx, 1);
    }
  },
});

// Генератори екшенів
export const {deleteContact,addContact} = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;