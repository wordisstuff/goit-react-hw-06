


import { createSlice } from "@reduxjs/toolkit";


const INIT_STATE = {
    contacts: [],
    filter: '',
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INIT_STATE,
  // Об'єкт редюсерів
  reducers: {
      addContact(state, action) {
        state.contacts.push(action.payload);
    },
      deleteContact(state, action) {
        // state.contacts = state.contacts.filter(
        //   (contact) => contact.id !== action.payload
        // );
          const contactIdx = state.contacts.findIndex(contact => contact.id === action.payload);
          state.contacts.splice(contactIdx, 1);
    },
      filterContacts(state, action) {
          state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContacts,deleteContact,addContact} = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;



// export const contactsReducer = (state = INIT_STATE, action) => {

// switch (action.type) {
//     case "ADD_CONTACT": {
//         return {
//             ...state,
//             contacts: [...state.contacts, action.payload],
//         };
//     }
//         case "DELETE_CONTACT": {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload)
//             }
//     }
//         case "FILTER_CONTACTS": {
//             return {
//                 ...state,
//                 filter: action.payload
//             }
//         }
// }


//     return state    
// }