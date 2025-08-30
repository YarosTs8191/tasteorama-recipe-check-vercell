import Modal from 'react-modal';
Modal.setAppElement('#root');
import styles from './ModalLogout.module.css';
import { useNavigate } from 'react-router-dom';
import sprite from '../../../public/sprite.svg';
import { logoutUser } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const ModalLogout = ({ isOpen, onRequestClose, onBurgerModalClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onConfirm = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      onRequestClose();
      if (onBurgerModalClose) {
        onBurgerModalClose();
      }
      navigate('/');
    } catch (error) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.container}
      overlayClassName={styles.overlay}
    >
      <div>
        <button className={styles.btnx} onClick={onRequestClose}>
          <svg width="24" height="24">
            <use href={`${sprite}#dagger_icon`}></use>
          </svg>
        </button>
        <h2 className={styles.h2}>Are you sure?</h2>
        <p className={styles.p}>We will miss you!</p>
        <div className={styles.btncontainer}>
          <button className={styles.btncancel} onClick={onRequestClose}>
            Cancel
          </button>
          <button className={styles.btnlogout} onClick={onConfirm}>
            Log out
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogout;