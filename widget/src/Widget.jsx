import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import WidgetCounter from './WidgetCounter';

const About = React.lazy(() => import('./About'));

function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
      <h2>Home widget</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>404 widget</h2>
    </div>
  );
}

const Widget = () =>  {
	return (
		<BrowserRouter>
			<div>
				<div>Widget</div>
				<WidgetCounter />
				<Navigation />
				<Routes>
					<Route index element={<Home />} />
					<Route
						path="about"
						element={
							<React.Suspense fallback={<>...</>}>
								<About />
							</React.Suspense>
						}
					/>
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default Widget;