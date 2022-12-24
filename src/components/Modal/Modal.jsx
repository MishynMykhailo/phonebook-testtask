import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../redux/ModalSlice";
import { getModalValueState } from "../../redux/selectors";
import s from "./Modal.module.css";

const Modal = ({ children }) => {
  const { modalActive } = useSelector(getModalValueState);

  const dispatch = useDispatch();
  return (
    <div
      className={modalActive ? s.modalActive : s.modalClosed}
      onClick={() => {
        dispatch(toggleModal());
      }}
    >
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default Modal;
