import Modal from 'react-modal';

const ImageModal = ({ isOpenModal, onCloseModal }) => {
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={onCloseModal}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <button onClick={onCloseModal}>x</button>
      <div>
        <p>I am a modal</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
