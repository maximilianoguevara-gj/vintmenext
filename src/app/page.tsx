// pages/404.js
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/">
        <a className={styles.homeLink}>Volver a la página principal</a>
      </Link>
    </div>
  );
};

export default Custom404;

