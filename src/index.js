import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import theme from "assets/theme";
import { ThemeProvider } from "@material-ui/core/styles";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";
import history from "functions/history";

// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import NewPage from "views/NewPage/NewPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage";
import UserRoute from "functions/route-guards/UserRoute";
import VisitorRoute from "functions/route-guards/VisitorRoute";
import BasicInfo from "views/ItemWizardPage/BasicInfo";
import PostItem from "views/ItemWizardPage/PostItem";
import HomePage from "./views/HomePage/HomePage";
import SearchPage from "./views/SearchPage/SearchPage";
import UserProfilePage from "./views/UserProfilePage/UserProfilePag";
import userStorePage from "./views/Profile/StorePage/UserStorePage";


ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <div id="snackbarhelper" />
      <Router history={history}>
        <Switch>
          <Route path="/about-us" component={AboutUsPage} />
          <Route path="/blog-post" component={BlogPostPage} />
          <Route path="/blog-posts" component={BlogPostsPage} />
          <Route path="/components" component={ComponentsPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/ecommerce-page" component={EcommercePage} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/profile-page" component={ProfilePage} />

          <Route path="/product-page" component={ProductPage} />
          <Route path="/sections" component={SectionsPage} />
          <Route path="/shopping-cart-page" component={ShoppingCartPage} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/error-page" component={ErrorPage} />
          <Route path="/item-wizard" component={BasicInfo} />
          <Route path="/post-item" component={PostItem} />
         
          <UserRoute path="/new" component={NewPage} />
          <VisitorRoute path="/login" component={LoginPage} />
          <VisitorRoute path="/register" component={RegisterPage} />
          <Route path="/search" component={SearchPage} />
          <UserRoute path="/profile" component={UserProfilePage} />
          <UserRoute path="/user/:id" component={userStorePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);

