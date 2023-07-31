import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
	const formattedPrice = `$${props.item.price.toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.item.name}</h3>
				<div className={styles.description}>{props.item.description}</div>
				<div className={styles.price}>{formattedPrice}</div>
			</div>
			<div>
				<MealItemForm id={props.item.id} />
			</div>
		</li>
	);
}

export default MealItem;