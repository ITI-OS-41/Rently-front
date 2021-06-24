import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import theme from 'assets/theme'
import { ThemeProvider } from '@material-ui/core/styles';

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";
import history from 'functions/history'

// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import NewPage from "views/NewPage/NewPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage";
import UserRoute from "functions/route-guards/UserRoute";
import VisitorRoute from "functions/route-guards/VisitorRoute";
import HomePage from "./views/HomePage/HomePage";
import SearchPage from "./views/SearchPage/SearchPage";
import UserProfilePage from "./views/UserProfilePage/UserProfilePag";
import userStorePage from "./views/Profile/StorePage/UserStorePage";
import MessengerPage from "./views/MessengerPage/MessengerPage";

import Blogs from './views/Pages/Blogs/Blogs';
import SingleBlog from './views/Pages/SingleBlog/SingleBolg'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <div id="snackbarhelper" />
      <Router history={history}>
        <Switch>
          <Route path="/blogs" component={Blogs} />
          <Route path="/blog/:id" component={SingleBlog} />
          <UserRoute path="/new" component={NewPage} />
          <VisitorRoute path="/login" component={LoginPage} />
          <VisitorRoute path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <UserRoute path="/messenger" component={MessengerPage} />
          <UserRoute path="/profile" component={UserProfilePage} />
          <UserRoute path="/user/:id" component={userStorePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

