import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './about/About';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import Cards from './home/Cards';
import Login from './login/Login';
import Signup from './signup/Signup';
import EditStudentProfile from './dashboard/EditStudentProfile';
import Profile from './dashboard/Profile';
import Privacy from './static-pages/PrivacyPolicy';
import Contact from './static-pages/Contact';
import Card from './home/Card';
import EditStudentAccount from './dashboard/EditStudentAccount';

const Routes = props => {
  const checkLoggedIn = props.checkLoggedIn;
  return ( 
    <Switch>
      <Route
        exact
        path="/"
        render={props => {
          console.log(props);
          return <Home {...props} />;
        }}
      />
        <Route
        path="/cards/:id"
        render={props => {
          console.log(props);
          return <Card {...props} />;
        }}
      />
       {/* <Route
        path="/loacation"
        render={props => {
          console.log(props);
          return <Map {...props} />;
        }}
      /> */}
      <Route
        path="/about"
        render={props => {
          console.log(props);
          return <About {...props} />;
        }}
      />
      <Route
        path="/dashboard"
        render={props => {
          console.log(props);
          return checkLoggedIn() ? (
            <EditStudentProfile {...props} />
          ) : (
            <Dashboard {...props} />
          );
        }}
      />
      <Route
        path="/profile"
        render={props => {
          console.log(props);
          return <Profile {...props} />;
        }}
      />
      <Route
        path="/account"
        render={props => {
          console.log(props);
          return <EditStudentAccount {...props} />;
        }}
      />
      <Route
        path="/login"
        render={props => {
          console.log(props);
          return <Login {...props} />;
        }}
      />
      <Route
        path="/signup"
        render={props => {
          console.log(props);
          return <Signup {...props} />;
        }}
      />
      <Route path="/privacy-policy" component={Privacy} />;
      <Route path="/contact" component={Contact} />;
    </Switch>
  );
}
 
export default Routes;