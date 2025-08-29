import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import sprite from '../../assets/icons/icons.svg';
import styles from './Header.module.css';
import BurgerModal from '../BurgerModal/BurgerModal';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <svg className={styles.logo}>
            <use href={`${sprite}#icon-logo`} />
          </svg>
          <span className={styles.title}>Tasteorama</span>
        </Link>
        <Navigation isLoggedIn={isLoggedIn} />
        <button
          className={styles.burgerBtn}
          aria-label="Open mobile menu"
          onClick={toggleModal}
        >
          <svg className={styles.burger}>
            <use href={`${sprite}#icon-burger`} />
          </svg>
        </button>
      </div>

      {isModalOpen && (
        <BurgerModal onClose={toggleModal} isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
};