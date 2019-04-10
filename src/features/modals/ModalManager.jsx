import React from "react";
import { connect } from "react-redux";
import TestModal from "./TestModal";
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal
};

const mapState = state => ({
  currentModal: state.modals
});

const ModalManager = ({ currentModal }) => {
  let renderedModal;

  if (currentModal) {
    console.log("ModalManager: currentModal", currentModal);
    console.log("ModalManager: modalType", currentModal.modalType);
    console.log("ModalManager: modalProps", currentModal.modalProps);
    const { modalType, modalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />;
  }
  return <span>{renderedModal}</span>;
};

export default connect(mapState)(ModalManager);
