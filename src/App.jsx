// import { useState } from 'react'
import contactsListData from "./data/contactsList.json";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector, useDispatch } from "react-redux";

// const contactsListData = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const contactsData =
  //     JSON.parse(localStorage.getItem("Contacts data")) ?? contactsListData;
  //   return contactsData;
  // });
  const dispatch = useDispatch();
  const contacts = useSelector((state) => {
    console.log(state);
    return state.contacts.contacts;
  });
  // const [filter, setFilter] = useState("");

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

  const filteredContacts = contacts.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onFilterContacts = (ev) => filter(ev.target.value);

  return (
    <>
      <h1>
        <span style={{ color: "#9c9ef9aa" }}>P</span>h
        <span style={{ color: "#9cf9c0aa" }}>o</span>n
        <span style={{ color: "#61dafbaa" }}>e</span>b
        <span style={{ color: "#80945baa" }}>♾️</span>k
      </h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox filter={filter} />
      <ContactList data={filteredContacts} onDeleteContact={onDeleteContact} />
    </>
  );
}

export default App;
