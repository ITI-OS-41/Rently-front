import Avatar from "@material-ui/core/Avatar";
import React, {useContext} from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { green,lightBlue } from "@material-ui/core/colors";
import {UserContext} from "../../Context";
import {dateTime} from "../../functions/helpers";
import TimeAgo from 'timeago-react';

const color2= '#e3e3e3';
const color2darken = '#ccc';
const color1= '#A8DDFD';
const color1darken= '#7ba8fd';

const useStyles = makeStyles((theme) =>
    createStyles({
        messageRow: {
            display: "flex"
        },
        messageRowRight: {
            display: "flex",
            justifyContent: "flex-end"
        },
        message:{
            position: "relative",
            marginBottom: "10px",
            padding: "10px",
            maxWidth: "60%",
            border: "1px solid",
            borderRadius: "5px",

            "&:after": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",

            },

            "&:before": {
                content: "''",
                position: "absolute",
                width: "0",
                height: "0",
            },
        },
        messageBlue: {
            marginLeft: "20px",
            backgroundColor: color2,
            borderColor: color2darken,
            "&:after": {
                borderTop: `15px solid ${color2}`,
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                left: "-15px"
            },
            "&:before": {
                borderTop: `17px solid ${color2darken}`,
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                left: "-17px"
            }
        },
        messageOrange: {
            marginRight: "20px",
            backgroundColor: `${color1}`,
            borderColor: `${color1darken}`,
            "&:after": {
                borderTop: `15px solid ${color1}`,
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                right: "-15px"
            },
            "&:before": {
                borderTop: `17px solid ${color1darken}`,
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                right: "-17px"
            }
        },

        messageContent: {
            padding: 0,
            margin: 0,
            fontSize: '0.9rem'
        },
        textRight: {
            textAlign: 'right',
        },
        messageTimestamp:{
            fontSize: '0.7rem',
            margin: '0',
            display: 'block'
        },
        orange: {
            color: theme.palette.getContrastText(green[500]),
            backgroundColor: green,
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        avatarNothing: {
            color: "transparent",
            backgroundColor: "transparent",
            width: theme.spacing(4),
            height: theme.spacing(4)
        },
        displayName: {
            marginLeft: "20px"
        }
    })
);


export function Message(props) {
    const {message,...rest} = props;
    const classes = useStyles();

    const {user} = useContext(UserContext);

    let isMine = message.sender._id === user._id;

    return (
        <div className={isMine?classes.messageRowRight:classes.messageRow}>
            {
                !isMine && <Avatar
                    alt={name}
                    className={classes.orange}
                    src={message.sender.photo}
                />
            }
            {isMine}
            <div className={`${classes.message} ${isMine?classes.messageOrange:classes.messageBlue}`}>
                <p  dangerouslySetInnerHTML={{__html: message.text.replace('\n', '<br/>')}} className={classes.messageContent}/>
                <span className={`${classes.messageTimestamp} `} >
                    <TimeAgo datetime={message.createdAt}/>
                </span>
            </div>
        </div>
    )
}
