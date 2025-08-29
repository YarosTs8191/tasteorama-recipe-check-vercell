import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.wrapper}>
    <>
      <Header/>
      <main className={styles.layout}>
        <Outlet />
      </main>
      <Footer/>
    </>
    </div>
  );
};

export default Layout;