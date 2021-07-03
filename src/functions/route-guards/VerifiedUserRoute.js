// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAdmin } from '../helpers'
import {UserContext} from "../../Context";
import toast from "../toast";

const VerifiedUserRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    // const {user} = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem('rently-user'))


    return (
        <Route
            {...rest}
            render={props =>
                user.isVerified ? (
                    <Component {...props} />
                ) : (
                    <>
                        {toast.error("Your account is not verified ")}
                        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                    </>
                )
            }
        />
    )
}

export default VerifiedUserRoute
