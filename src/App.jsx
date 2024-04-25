import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteContact
} from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.items;
  });

  const filter = useSelector((state) => state.contacts.filter);

  const onDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };

  // const onFilterContacts = (ev) => {
  //   dispatch(filterContacts(ev.target.value));
  // };

  const filteredContacts = contacts.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>
        <span style={{ color: "#9c9ef9aa" }}>P</span>h
        <span style={{ color: "#9cf9c0aa" }}>o</span>n
        <span style={{ color: "#61dafbaa" }}>e</span>b
        <span style={{ color: "#80945baa" }}>♾️</span>k
      </h1>
      <ContactForm/>
      <SearchBox filter={filter} onFilterContacts={onFilterContacts} />
      <ContactList data={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  );
}

export default App;
