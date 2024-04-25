import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectorFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const data = useSelector(selectContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const delContactFunc = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = data.filter((userContact) =>
    userContact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {data &&
        filteredContacts.map((it) => {
          return (
            <div key={it.id}>
              <Contact data={it} delContactFunc={delContactFunc} />
            </div>
          );
        })}
    </>
  );
};

export default ContactList;
