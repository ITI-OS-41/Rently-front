import CustomDropdown from "../CustomDropdown/CustomDropdown";
import {Link} from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import React, {useContext, useEffect, useState} from "react";
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import StorefrontIcon from '@material-ui/icons/Storefront';
import styles from "../../assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {makeStyles} from "@material-ui/core/styles";
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import {get} from "../../functions/request";
import {UserContext} from "../../Context";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";

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
    const {dropdownHoverColor , ...rest} = props;
    const classes = useStyles();
    const {user} = useContext(UserContext);
    const [notifications, setNotifications]= useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    useEffect(()=>{
        get(`notification?receiver=${user._id}`)
            .then(res=>{

                console.log(res.data)
            })
    },[])




    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <NotificationsActiveOutlinedIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>


        // <CustomDropdown
        //     dropPlacement={'bottom-end'}
        //     noLiPadding
        //     navDropdown
        //     caret={false}
        //     hoverColor={dropdownHoverColor}
        //     buttonProps={{
        //         className: classes.navLink,
        //         color: "transparent",
        //         round: true,
        //     }}
        //     buttonIcon={NotificationsActiveOutlinedIcon}
        //     dropdownList={[
        //         <Link
        //             to="/profile"
        //             className={classes.dropdownLink}
        //         >
        //             <MessageOutlinedIcon className={classes.dropdownIcons} />
        //             You have a new message from Mahmoud
        //         </Link>,
        //
        //         <Link
        //             to="/profile/store"
        //             className={classes.dropdownLink}
        //         >
        //             <StorefrontIcon className={classes.dropdownIcons} />
        //             You have a new rent request for item "item name"
        //         </Link>,
        //
        //     ]}
        // />
    )
}
