// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../helpers'
import {UserContext} from "../../Context";

const VisitorRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const token = localStorage.getItem('rently-token');

    return (
        <Route
            {...rest}
            render={props =>
                !token ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default VisitorRoute
