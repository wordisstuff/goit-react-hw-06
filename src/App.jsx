import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    return state.contacts.contacts;
  });

  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    localStorage.setItem("Contacts data", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (data) => {
    const action = {
      type: "ADD_CONTACT",
      payload: data,
    };
    dispatch(action);
  };

  const onDeleteContact = (userId) => {
    const action = {
      type: "DELETE_CONTACT",
      payload: userId,
    };
    dispatch(action);
  };

  const onFilterContacts = (ev) => {
    const action = {
      type: "FILTER_CONTACTS",
      payload: ev.target.value,
    };
    dispatch(action);
  };

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
      <ContactForm addContacts={addContacts} />
      <SearchBox filter={filter} onFilterContacts={onFilterContacts} />
      <ContactList data={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  );
}

export default App;
