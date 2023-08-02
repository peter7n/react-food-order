import { Fragment } from 'react';
import { ReactDOM } from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = () => {
	return (
		<div className={styles.backdrop}></div>
	);
};

const ModalOverlay = () => {
	return (
		<div className={styles.modal}></div>
	);
};

const Modal = () =>{
	return (
		<Fragment>
			{ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay-root'))}
			{ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
		</Fragment>
	);
};

export default Modal;