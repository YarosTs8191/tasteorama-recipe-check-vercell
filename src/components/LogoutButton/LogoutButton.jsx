import styles from './LogoutButton.module.css';
import sprite from '../../assets/icons/icons.svg';
import { useState } from 'react';
import ModalLogout from '../ModalLogout/ModalLogout.jsx';

export default function LogoutButton({ onBurgerModalClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.logout} onClick={handleOpenModal}>
        <svg className={styles.logoutBtn}>
          <use href={`${sprite}#icon-logout`} />
        </svg>
      </button>
      <ModalLogout
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onBurgerModalClose={onBurgerModalClose}
      />
    </>
  );
}