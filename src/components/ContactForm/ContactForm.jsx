import React, { useState } from "react";
import s from "./ContactForm.module.css";
import { addContact, deleteContact } from "../../redux/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import getItemsValueState from "../../redux/selectors";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getItemsValueState);

  const handlerChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "last_name":
        setLast_name(value);
        break;
      case "adress":
        setAdress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone_number":
        setPhone_number(value);
        break;
      default:
    }
  };

  const handlerSumbit = (e) => {
    e.preventDefault();

    reset();
    return dispatch(
      addContact({
        name,
        last_name,
        adress,
        city,
        country,
        email,
        phone_number,
      })
    );
  };
  const reset = () => {
    setName("");
    setLast_name("");
    setAdress("");
    setCity("");
    setCountry("");
    setEmail("");
    setPhone_number("");
  };
  return (
    <>
      <form className={s.form} onSubmit={handlerSumbit}>
        <label className={s.label} htmlFor="name">
          Name
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="text"
          name="name"
          required
          id="name"
          value={name}
        />
        <label className={s.label} htmlFor="last_name">
          Last Name
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="text"
          name="last_name"
          required
          id="last_name"
          value={last_name}
        />

        <label className={s.label} htmlFor="adress">
          Adress
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="text"
          name="adress"
          required
          id="adress"
          value={adress}
        />

        <label className={s.label} htmlFor="city">
          City
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="text"
          name="city"
          required
          id="city"
          value={city}
        />

        <label className={s.label} htmlFor="country">
          Country
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="text"
          name="country"
          required
          id="country"
          value={country}
        />

        <label className={s.label} htmlFor="email">
          Email
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="email"
          name="email"
          required
          id="email"
          value={email}
        />

        <label className={s.label} htmlFor="phone_number">
          Phone number
        </label>
        <input
          onChange={handlerChange}
          className={s.input}
          type="phone"
          name="phone_number"
          required
          id="phone_number"
          value={phone_number}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
