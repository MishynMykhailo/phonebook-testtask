import React, { useState } from "react";
import s from "./UpdateContact.module.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getContactValueState } from "../../redux/selectors";
import { updateContact } from "../../redux/operations";
import { toggleModal } from "../../redux/ModalSlice";
import { Notify } from "notiflix/build/notiflix-notify-aio";

const UpdateContact = ({ contactId }) => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContactValueState);

  const { name, last_name, adress, city, country, email, phone_number } =
    items.find(({ id }) => id === contactId);

  const [editName, setEditName] = useState(name);
  const [editLast_name, setEditLast_name] = useState(last_name);
  const [editAdress, setEditAdress] = useState(adress);
  const [editCity, setEditCity] = useState(city);
  const [editCountry, setEditCountry] = useState(country);
  const [editEmail, setEditEmail] = useState(email);
  const [editPhone_number, setEditPhone_number] = useState(phone_number);

  const handlerChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setEditName(value);
        break;
      case "last_name":
        setEditLast_name(value);
        break;
      case "adress":
        setEditAdress(value);
        break;
      case "city":
        setEditCity(value);
        break;
      case "country":
        setEditCountry(value);
        break;
      case "email":
        setEditEmail(value);
        break;
      case "phone_number":
        setEditPhone_number(value);
        break;
      default:
    }
  };

  const handlerSumbit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      Notify.failure(`Fill in the fields before adding`);
      return;
    }
    return (
      dispatch(
        updateContact({
          contactId,
          name: editName,
          last_name: editLast_name,
          adress: editAdress,
          city: editCity,
          country: editCountry,
          email: editEmail,
          phone_number: editPhone_number,
        })
      ),
      dispatch(toggleModal()),
      Notify.success("contact updated")
    );
  };
  return (
    <>
      <h2>Update contact</h2>
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
          value={editName}
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
          value={editLast_name}
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
          value={editAdress}
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
          value={editCity}
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
          value={editCountry}
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
          value={editEmail}
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
          value={editPhone_number}
          placeholder="XXX-XXX-XX-XX"
        />
        <span className={s.button}>
          <Button type="submit" name="Edit" />
        </span>
      </form>
    </>
  );
};

export default UpdateContact;
