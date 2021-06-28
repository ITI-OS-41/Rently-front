import CustomDropdown from "../CustomDropdown/CustomDropdown";
import {Link} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import {get} from "../../functions/request";
import {UserContext} from "../../Context";

const useStyles = makeStyles(styles);


const ITEM_HEIGHT = 48;

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];


export function NotificationNavbar(props) {
    const {dropdownHoverColor, ...rest} = props;
    const classes = useStyles();
    const {user} = useContext(UserContext);
    const [notifications, setNotifications] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(() => {
        get(`notification?receiver=${user._id}`)
            .then(response => {
                setNotifications(response.data.res);
            })
            .catch(e => {
                console.log(e)
            })
    }, []);


    return (
        <CustomDropdown
            dropPlacement={'bottom-end'}
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
                notifications.length ? notifications.map((notification) => (
                    <Link
                        key={notification._id}
                        to={notification.type === 'rent' ? '/profile/posting' : '/messenger'}
                        className={classes.dropdownLink}
                    >
                        {
                            notification.type === 'rent' ?
                                <StorefrontIcon className={classes.dropdownIcons}/>
                                :
                                <MessageOutlinedIcon/>
                        }

                        {notification.content}
                    </Link>
                )) : <h6 className={classes.dropdownLink} style={{padding: '0 1rem'}}>You don't have any notifications</h6>

                // <Link
                //     to="/profile/store"
                //     className={classes.dropdownLink}
                // >
                //     <StorefrontIcon className={classes.dropdownIcons} />
                //     You have a new rent request for item "item name"
                // </Link>,

            ]}
        />
    )
}
