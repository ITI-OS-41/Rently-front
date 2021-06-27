import CustomDropdown from "../CustomDropdown/CustomDropdown";
import {Link} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import React from "react";
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const useStyles = makeStyles(styles);

export function NotificationNavbar(props) {
    const {dropdownHoverColor , ...rest} = props;
    const classes = useStyles();

    return (
        <CustomDropdown
            dropPlacement={"right"}
            noLiPadding
            navDropdown
            caret={false}
            hoverColor={dropdownHoverColor}
            buttonProps={{
                className: classes.navLink,
                color: "transparent",
                round: true,
            }}
            buttonIcon={NotificationsActiveOutlinedIcon}
            dropdownList={[
                <Link
                    to="/profile"
                    className={classes.dropdownLink}
                >
                    <MessageOutlinedIcon className={classes.dropdownIcons} />
                    You have a new message from Mahmoud
                </Link>,

                <Link
                    to="/profile/store"
                    className={classes.dropdownLink}
                >
                    <StorefrontIcon className={classes.dropdownIcons} />
                    You have a new rent request for item "item name"
                </Link>,

            ]}
        />

    )
}
