import React from 'react';
import styles from './WidgetCounter.module.css';

const WidgetCounter = () => {
	const [count, setCount] = React.useState(0);
	
	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<div className={styles.counter}>WidgetCounter: {count}</div>
			<button onClick={increment}>increment</button>
		</div>

	);
}

export default WidgetCounter;