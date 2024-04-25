import { createSlice } from "@reduxjs/toolkit";

const INIT_STATE = { items: []
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
      deleteContact(state, action) {
        // state.contacts = state.contacts.filter(
        //   (contact) => contact.id !== action.payload
        // );
          const contactIdx = state.items.findIndex(contact => contact.id === action.payload);
          state.items.splice(contactIdx, 1);
    }
  },
});

// Генератори екшенів
export const {deleteContact,addContact} = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => {
  return state.contacts.items
}
