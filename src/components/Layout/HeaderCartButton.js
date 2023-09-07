import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon.js';
import CartContext from '../../store/cart-context.js';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${styles.button} ${styles.bump}`;

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>
				{numberOfCartItems}
			</span>
		</button>
	);
}

export default HeaderCartButton;