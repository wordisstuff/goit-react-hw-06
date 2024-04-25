
import Contact from "../Contact/Contact";
import {useSelector} from "react-redux"
import { selectContacts } from "../../redux/contactsSlice";


const ContactList = () => {

const data = useSelector(selectContacts)
  return (
    <>
      {data &&
        data.map((it) => {
          return (
            <div key={it.id}>
              <Contact data={it} onDeleteContact={onDeleteContact} />
            </div>
          );
        })}
    </>
  );
};

export default ContactList;
