import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="Logo Grupo ICTS" />

        <nav>
          <a href="#">Items</a>
          <a href="/pedidos">Pedidos</a>
        </nav>
      </div>
    </header>
  )
}