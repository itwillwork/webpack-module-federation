import HostCounter from './HostCounter';
import Widget from 'widget_a/Widget';
import styles from './App.module.css';

const App = () => (
	<>
		<h1>Host</h1>
		<HostCounter />
		<div className={styles.widget}>
			<Widget />
		</div>
	</>

);

export default App;