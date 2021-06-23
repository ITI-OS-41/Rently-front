import Avatar from "@material-ui/core/Avatar";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import classNames from "classnames";


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
            backgroundColor: "#A8DDFD",
            borderColor: "#97C6E3",
            "&:after": {
                borderTop: "15px solid #A8DDFD",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                left: "-15px"
            },
            "&:before": {
                borderTop: "17px solid #97C6E3",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                left: "-17px"
            }
        },
        messageOrange: {
            marginRight: "20px",
            backgroundColor: "#f8e896",
            borderColor: "#dfd087",
            "&:after": {
                borderTop: "15px solid #f8e896",
                borderLeft: "15px solid transparent",
                borderRight: "15px solid transparent",
                top: "0",
                right: "-15px"
            },
            "&:before": {
                borderTop: "17px solid #dfd087",
                borderLeft: "16px solid transparent",
                borderRight: "16px solid transparent",
                top: "-1px",
                right: "-17px"
            }
        },

        messageContent: {
            padding: 0,
            margin: 0,
            fontSize: '1.1rem'
        },
        textRight: {
            textAlign: 'right',
        },
        messageTimestamp:{
            fontSize: '0.7rem',
            margin: '0'
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


//avatarが左にあるメッセージ（他人）
// export const MessageLeft = (props) => {
//     const {message,timestamp,...rest} = props;
//     const classes = useStyles();
//     return (
//         <>
//             <div className={classes.messageRow}>
//                 <div>
//                     <div className={classes.displayName}>{displayName}</div>
//                     <div className={classes.messageBlue}>
//                         <div>
//                             <p className={classes.messageContent}>{message}</p>
//                         </div>
//                         <div className={classes.messageTimeStampRight}>{timestamp}</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
//
// //avatarが右にあるメッセージ（自分）
// export const MessageRight = (props) => {
//     const classes = useStyles();
//     const message = props.message ? props.message : "no message";
//     const timestamp = props.timestamp ? props.timestamp : "";
//     return (
//         <div className={classes.messageRowRight}>
//             <div className={classes.messageOrange}>
//                 <p className={classes.messageContent}>{message}</p>
//                 <div className={classes.messageTimeStampRight}>{timestamp}</div>
//             </div>
//         </div>
//     );
// };


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
                <span className={`${classes.messageTimestamp} ${isMine??classes.textRight}`} >{timestamp}</span>
            </div>
        </div>
    )
}
