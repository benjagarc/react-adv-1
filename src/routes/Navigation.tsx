import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Suspense fallback={<p>LOading...</p>}>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({ to, name}) =>(
                  <li key={to}>
                    <NavLink to={to} className={ ({ isActive}) => isActive ? "nav-active": '' }>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            {
              routes.map(({ path, Component}) => (
                <Route key={path} path={path} element={<Component />}/>
              ))
            }
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}