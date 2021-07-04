/* eslint-disable */
import React, {useContext, useEffect} from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


// core components
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown.js";

import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {UserContext} from "../../Context";
import axios from "../../functions/axios";
import history from "../../functions/history";
import Button from "@material-ui/core/Button";
import {NotificationNavbar} from "./NotificationNavbar";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const smoothScroll = (e, target) => {
        if (window.location.pathname === "/sections") {
            var isMobile = navigator.userAgent.match(
                /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
            );
            if (isMobile) {
                // if we are on mobile device the scroll into view will be managed by the browser
            } else {
                e.preventDefault();
                var targetScroll = document.getElementById(target);
                scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
            }
        }
    };
    const scrollGo = (element, to, duration) => {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    };

    const {dropdownHoverColor} = props;
    const classes = useStyles();

    const {user,setUser} = useContext(UserContext);


    const handleLogout = () =>{
        localStorage.removeItem('rently-user');
        localStorage.removeItem('rently-token');
        localStorage.removeItem('rently-userid');
        axios.defaults.headers.common['Authorization'] = null

        setUser({});

        history.push("/");
    }

    return (
        <List
            className={classes.list + " " + classes.mlAuto}>

            {user?.role==='admin' &&
            <>
                <a

                    href="https://rently-service-dashboard.herokuapp.com/"
                    className={classes.navLink}
                >
                    Dashboard
                </a>
            </>
            }
            { !user.username &&
            <>
                <ListItem className={classes.listItem}>
                    <Link
                        to="/login"
                        className={classes.navLink}
                    >
                        Login
                    </Link>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <Link
                        to="/register"
                        className={classes.navLink}
                    >
                        Register
                    </Link>
                </ListItem>
            </>
            }
            <ListItem className={classes.listItem}>
                <Link
                    to="/blog"
                    className={classes.navLink}
                >
                    Blog
                </Link>
            </ListItem>

            {user.username &&
            <>

                <ListItem className={classes.listItem}>
                    <Link
                        to="/create-item"
                        className={classes.navLink}
                    >
                        <ControlPointOutlinedIcon /> Create item
                    </Link>
                </ListItem>

                <ListItem className={classes.listItem}>
                    <Link
                        to="/favorite"
                        className={classes.navLink}
                    >
                        <FavoriteOutlinedIcon />
                    </Link>
                </ListItem>


                <ListItem className={classes.listItem}>
                    <Link
                        to="/cart"
                        className={classes.navLink}
                    >
                        <ShoppingCartOutlinedIcon/>
                    </Link>
                </ListItem>


                <ListItem className={classes.listItem}>
                    <NotificationNavbar dropdownHoverColor={dropdownHoverColor}/>
                </ListItem>


            <ListItem className={classes.listItem}>

                <CustomDropdown
                    noLiPadding
                    navDropdown
                    hoverColor={dropdownHoverColor}
                    buttonText={user.username}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                    }}
                    buttonIcon={AccountCircleIcon}
                    dropdownList={[
                        <Link
                            to="/profile"
                            className={classes.dropdownLink}
                        >
                            <AccountCircleIcon className={classes.dropdownIcons} /> Profile
                        </Link>,
                        <Link
                            to="/profile/store"
                            className={classes.dropdownLink}
                        >
                            <StorefrontIcon className={classes.dropdownIcons} />My Store
                        </Link>,
                        <Link
                            to="/messenger"
                            className={classes.dropdownLink}
                        >

                            <ChatOutlinedIcon className={classes.dropdownIcons} /> Messenger
                        </Link>,
                        <Link
                            to="/#"
                            className={classes.dropdownLink}
                            onClick={()=>{handleLogout()}}
                        >
                            <ExitToAppOutlinedIcon className={classes.dropdownIcons} />Logout
                        </Link>,
                    ]}
                />
            </ListItem>


            </>
            }

        </List>
    );
}

HeaderLinks.defaultProps = {
    hoverColor: "primary",
};

HeaderLinks.propTypes = {
    dropdownHoverColor: PropTypes.oneOf([
        "dark",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
    ]),
};
