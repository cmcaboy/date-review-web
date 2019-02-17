// * This is the about page

import * as React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

interface ModalProps {
  showModal: boolean;
  label: string;
  toggleModal: () => void;
  children: React.ReactNode;
}

interface ModalState {}

class Modal extends React.Component<ModalProps, ModalState> {
  public render(): JSX.Element {
    const { showModal, label, toggleModal, children, ...props } = this.props;
    return (
      <StyledModal
        shouldCloseOnOverlayClick={true}
        isOpen={showModal}
        contentLabel={label}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        {...props}
      >
        {children}
      </StyledModal>
    );
  }
}

function ReactModalAdapter({ className, children, ...props }: any) {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
      children={children}
    />
  );
}

const StyledModal = styled(ReactModalAdapter)`
  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__content {
    width: 500px;
    margin: auto;
    background: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    border-width: 2px;
    border-color: #364051;
    margin-top: 5%;
    margin-bottom: 5%;
    /* @media (max-width: 770px) {
      margin-left: 2%;
      margin-right: 2%;
    } */
  }
`;

export { Modal };
