import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

import styles from './styles.module.scss';

export function EditItemModal({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className={styles.title}>Editar Item</h1>

      <AiOutlineClose className='react-modal-close' onClick={onRequestClose} />

      <form className={styles.formContent}>
        <label htmlFor="nameItem">
          <span>Nome</span>
          <input id="nameItem" type="text" />
        </label>

        <label htmlFor="brandItem ">
          <span> Marca</span>
          <input id="brandItem" type="text" />
        </label>

        <label htmlFor="typeItem">
          <span>Tipo</span>
          <input id="typeItem" type="text" />
        </label>

        <label htmlFor="quantityItem">
          <span>Quantidade</span>
          <input id="quantityItem" type="text" />
        </label>

        <label htmlFor="priceItem">
          <span>Preço</span>
          <input id="priceItem" type="text" />
        </label>

      </form>
      <button type="button" className={styles.buttonEdit}>Editar</button>
    </Modal>
  );
}