import React, { useState } from "react";
import s from "./ContactForm.module.css";
import { addContact } from "../../redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getContactValueState } from "../../redux/selectors";
import Button from "../Button/Button";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const dispatch = useDispatch();
  const { items } = useSelector(getContactValueState);

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
  const validateContact = (email) => {
    const normalizedEmail = email.toLowerCase();
    if (items.find(({ email }) => email.toLowerCase() === normalizedEmail)) {
      alert(`${email} is already in contacts`);
    } else {
      reset();
      return (
        dispatch(
          addContact({
            name,
            last_name,
            adress,
            city,
            country,
            email,
            phone_number,
          })
        ),
        Notify.success("Contact added")
      );
    }
  };
  const handlerSumbit = (e) => {
    e.preventDefault();
    if (name.trim() === "" && email.trim() === "") {
      Notify.failure(`Fill in the fields before adding`);
      return;
    }
    return validateContact(email);
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
          placeholder="Name"
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
          placeholder="Last Name"
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
          placeholder="Street"
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
          placeholder="City"
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
          placeholder="Country"
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
          placeholder="myEmail@xxx.xxx"
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
          placeholder="XXX-XXX-XX-XX"
        />
        <span className={s.button}>
          <Button type="submit" name="Submit" />
        </span>
      </form>
    </>
  );
};

export default ContactForm;
