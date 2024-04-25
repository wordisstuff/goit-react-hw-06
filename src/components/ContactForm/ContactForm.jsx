import { Field, Form, Formik } from "formik";
import validationSchema from "../helpers/validationSchema";
import { ErrorMessage } from "formik";
import {addContact} from "../../redux/contactsSlice"

import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

const ContactForm = () => {

  const dispatch = useDispatch()

  const handleAddContact = (values, actions) => {
    dispatch(addContact({
      name: values.userName,
      number: values.userTel,
      id: nanoid(),
    }));

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ userName: "", userTel: "" }}
        onSubmit={handleAddContact}
        validationSchema={validationSchema}
      >
        <Form>
          <label>
            <ErrorMessage
              className={css.error}
              name="userName"
              component="span"
            />
            <Field
              name="userName"
              type="text"
              placeholder="Henry Morgan"
            ></Field>
          </label>
          <br />
          <label>
            <Field name="userTel" type="tel" placeholder="0957777777"></Field>
            <ErrorMessage
              className={css.error}
              name="userTel"
              component="span"
            />
          </label>
          <br />
          <button type="submit">📥</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
