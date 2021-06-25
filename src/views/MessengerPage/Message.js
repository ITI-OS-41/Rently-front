import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { green,lightBlue } from "@material-ui/core/colors";

const color1= '#e3e3e3';
const color1darken = '#ccc';
const color2= '#A8DDFD';
const color2darken= '#7ba8fd';

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
            fontSize: '0.8rem',
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
    const {message,timestamp,isMine,photo,name,...rest} = props;
    const classes = useStyles();


    return (
        <div className={isMine?classes.messageRowRight:classes.messageRow}>
            {
                !isMine && <Avatar
                    alt={name}
                    className={classes.orange}
                    src={photo}
                />
            }
            <div className={`${classes.message} ${isMine?classes.messageOrange:classes.messageBlue}`}>
                <p className={classes.messageContent}>{message}</p>
                <span className={`${classes.messageTimestamp} ${classes.textRight}`} >{timestamp}</span>
            </div>
        </div>
    )
}
