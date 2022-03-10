import { useState } from 'react';
import Head from 'next/head'
import { Header } from '../components/Header'
import { EditItemModal } from '../components/EditItemModal';

import styles from './items.module.scss';

// Modal.setAppE  lement('#root');

export default function Home() {
  const [modalOpenEditItem, setModalOpenEditItem] = useState(false);

  function handleOpenModalEdit() {
    setModalOpenEditItem(true);
  }

  function handleCloseModalEdit() {
    setModalOpenEditItem(false);
  }

  return (
    <>
      <Head>
        <title>Challenge 02 | Items</title>
      </Head>

      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.titleAndButton}>
          <h1>Items cadastrados</h1>
          <button 
            type="button"
          >
            Novo Item
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>

          <tbody>
            <tr onClick={handleOpenModalEdit}>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
            <tr onClick={handleOpenModalEdit}>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
            <tr onClick={handleOpenModalEdit}>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
          </tbody>
        </table>
      </main>

     <EditItemModal isOpen={modalOpenEditItem} onRequestClose={handleCloseModalEdit  } />
    </>
  )
}
