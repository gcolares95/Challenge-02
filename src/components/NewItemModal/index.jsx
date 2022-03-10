import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

import styles from './styles.module.scss';

export function NewItemModal({ isOpen, onRequestClose }) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className={styles.title}>Criar novo Item</h1>

      <AiOutlineClose className='react-modal-close' onClick={onRequestClose} />

      <form className={styles.formContent}>
        <label htmlFor="new-nameItem">
          <span>Nome</span>
          <input id="new-nameItem" type="text" />
        </label>

        <label htmlFor="new-brandItem ">
          <span> Marca</span>
          <input id="new-brandItem" type="text" />
        </label>

        <label htmlFor="new-typeItem">
          <span>Tipo</span>
          <input id="new-typeItem" type="text" />
        </label>

        <label htmlFor="new-quantityItem">
          <span>Quantidade</span>
          <input id="new-quantityItem" type="text" />
        </label>

        <label htmlFor="new-priceItem">
          <span>Preço</span>
          <input id="new-priceItem" type="text" />
        </label>

      </form>
      <button type="button" className={styles.buttonEdit}>Editar</button>
    </Modal>
  ); 
}