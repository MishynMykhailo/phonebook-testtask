import React, { useEffect, useState } from "react";
import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getContactValueState,
  getModalValueState,
} from "../../redux/selectors";
import { fetchContacts, deleteContact } from "../../redux/operations";
import Modal from "../Modal/Modal";
import { toggleModal } from "../../redux/ModalSlice";
import UpdateContact from "../UpdateContact/UpdateContact";

const ContactList = () => {
  const { modalActive } = useSelector(getModalValueState);
  const { items, isLoading, error } = useSelector(getContactValueState);
  const [idUpdate, setIdUpdate] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handlerDeleteContact = (contactId) => {
    return dispatch(deleteContact(contactId));
  };

  return (
    <>
      <div className={s.div}>
        <div>
          <table className={s.table}>
            <thead className={s.thead}>
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
            <tbody>
              {items &&
                items.map(
                  ({
                    id,
                    name,
                    last_name,
                    adress,
                    city,
                    country,
                    email,
                    phone_number,
                  }) => {
                    return (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{last_name}</td>
                        <td>{adress}</td>
                        <td>{city}</td>
                        <td>{country}</td>
                        <td>{email}</td>
                        <td>{phone_number}</td>
                        <td>
                          <button
                            type="button"
                            className={s.btnEdit}
                            onClick={() => {
                              dispatch(toggleModal());
                              setIdUpdate(id);
                            }}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            className={s.btnDelete}
                            onClick={() => handlerDeleteContact(id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody>
          </table>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          {modalActive && (
            <Modal>
              <UpdateContact contactId={idUpdate} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactList;
