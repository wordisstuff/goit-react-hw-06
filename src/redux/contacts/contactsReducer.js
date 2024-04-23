const INIT_STATE = {
    contacts: [],
    filter: '',
};

export const contactsReducer = (state = INIT_STATE, action) => {

switch (action.type) {
    case "ADD_CONTACT": {
        return {
            ...state,
            contacts: [...state.contacts, action.payload],
        };
    }
        case "DELETE_CONTACT": {
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        }
}


    return state    
}