import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "blue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "blue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/pricing"
        exact
        style={linkStyles}
        activeStyle={{
          background: "blue",
        }}
      >
        Pricing
      </NavLink>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function Pricing() {
  return (
    <div>
      <h1>Pricing</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}


function App() {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/pricing">
        <Pricing />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
