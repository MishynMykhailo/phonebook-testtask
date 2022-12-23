import React from "react";
import s from "./ContactList.module.css";
const ContactList = ({ items }) => {
  return (
    <>
      <div className={s.div}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Adress</th>
              <th>City</th>
              <th>Country</th>
              <th>Email</th>
              <th>Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <button type="button">Add contact</button>
      </div>
    </>
  );
};

export default ContactList;
