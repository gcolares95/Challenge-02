import Head from 'next/head'
import { Header } from '../components/Header'

import styles from './items.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge 02 | Items</title>
      </Head>

      <Header />

      <main className={styles.mainContainer}>
        <div className={styles.titleAndButton}>
          <h1>Items cadastrados</h1>
          <button>Novo Item</button>
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
            <tr>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
            <tr>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
            <tr>
              <td>Galaxy</td>
              <td>Samsung</td>
              <td>Celular</td>
              <td>100</td>
              <td>R$ 200,00</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}
