import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, Switch} from "react-router";
import theme from "assets/theme";
import {ThemeProvider} from "@material-ui/core/styles";

import "assets/scss/material-kit-pro-react.scss?v=1.10.0";
import history from "functions/history";
// pages for this product
import LoginPage from "views/LoginPage/LoginPage.js";
import ItemPage from "views/ProductPage/ItemPage.js";
import ErrorPage from "views/ErrorPage/ErrorPage.js";
import NewPage from "views/NewPage/NewPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage";
import UserRoute from "functions/route-guards/UserRoute";
import VisitorRoute from "functions/route-guards/VisitorRoute";
import HomePage from "./views/HomePage/HomePage";
import SearchPage from "./views/SearchPage/SearchPage";
import CategoryPage from "./views/CategoryPage/CategoryPage";
import SubCategoryPage from "views/SubCategoryPage/SubCategoryPage";
import UserProfilePage from "./views/UserProfilePage/UserProfilePag";
import UserForm from "./views/ItemWizardPage/UserForm";
import userStorePage from "./views/Profile/StorePage/UserStorePage";
import MessengerPage from "./views/MessengerPage/MessengerPage";
import Blogs from './views/Blogs/Blogs';
import SingleBlog from './views/SingleBlog/SingleBolg'
import EcommercePage from "./views/EcommercePage/EcommercePage";
import Context from "./Context";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Context>
            <div id="snackbarhelper"/>
            <Router history={history}>
                <Switch>

                    <Route path="/error-page" component={ErrorPage}/>
                    <UserRoute path="/new" component={NewPage}/>


                    <Route path="/create-item" component={UserForm}/>
                    <Route exact path="/category" component={CategoryPage}/>
                    <Route path="/category/:id" component={SubCategoryPage}/>

                    <Route path="/blog/:id" component={SingleBlog}/>
                    <Route path="/blog" component={Blogs}/>


                    <Route exact path="/item" component={EcommercePage}/>
                    <Route exact path='/item/:id' component={ItemPage}/>

                    <VisitorRoute path="/login" component={LoginPage}/>
                    <VisitorRoute path="/register" component={RegisterPage}/>

                    <Route path="/search" component={SearchPage}/>

                    <UserRoute path="/messenger" component={MessengerPage}/>

                    <UserRoute path="/profile" component={UserProfilePage}/>
                    <UserRoute path="/user/:id" component={userStorePage}/>

                    <Route path="/" component={HomePage}/>

                </Switch>
            </Router>
        </Context>
    </ThemeProvider>,
    document.getElementById("root")
);
