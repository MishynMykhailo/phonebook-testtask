import React from "react";
import s from "./ContactFormPage.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Section from "../../components/Section/Section";
const ContactFormPage = () => {
  return (
    <Section>
      <div className={s.div}>
        <h2 className={s.h2}>Add new contact</h2>
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactFormPage;
