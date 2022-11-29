import React from 'react';
import HostCounter from './HostCounter';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styles from './App.module.css';

// import Widget from 'widget_a/Widget';
const Widget = React.lazy(() => import('widget_a/Widget'));


function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/widget">Widget</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home host</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404 host</h2>
    </div>
  );
}

const App = () => (
	<BrowserRouter>
		<h1>Host</h1>
		<HostCounter />
		<Navigation />
		<Routes>
			<Route index element={<Home />} />
			<Route
				path="/dashboard"
				element={
					<div><h2>dashboard host</h2></div>
				}
			/>
			<Route
				path="/widget"
				element={
          <React.Suspense fallback={<>...</>}>
  					<div className={styles.widget}>
  						<Widget />
  					</div>
          </React.Suspense>
				}
			/>
			<Route path="*" element={<NoMatch />} />
		</Routes>
	</BrowserRouter>
);

export default App;