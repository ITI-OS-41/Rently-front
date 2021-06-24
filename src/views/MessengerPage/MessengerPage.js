import React, {useState, useEffect, useRef} from "react";
import {
    Switch,
    Route,
    Link, NavLink,
} from "react-router-dom";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import Parallax from "components/Parallax/Parallax.js";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Scrollbars} from 'react-custom-scrollbars';
import {SCROLLBAR_CONFIG} from "../../config";
import MessageTextInput from "./MessageTextInput";

import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import {Message} from "./Message";
import MessengerPageParallax from "./MessengerPageParallax";
import * as PropTypes from "prop-types";
import Conversations from "./Conversations";


const useStyles1 = makeStyles(profilePageStyle);

const m = [
    {
    _id: 512,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: true,
        photo: "https://material-ui.com/static/images/avatar/1.jpg",
        displayName: 'Remy Sharp',
    },
    {
    _id: 3212,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: "https://material-ui.com/static/images/avatar/1.jpg",
        displayName: 'Remy Sharp',
    },
    {
        _id: 321,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: true,
        photo: "https://material-ui.com/static/images/avatar/1.jpg",
        displayName: 'Remy Sharp',
    },
    {
        _id: 124,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: "https://material-ui.com/static/images/avatar/1.jpg",
        displayName: 'Remy Sharp',
    },
    {
        _id: 412,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: "https://material-ui.com/static/images/avatar/1.jpg",
        displayName: 'Remy Sharp',
    },
];

export default function MessengerPage(props) {
    const classes1 = useStyles1();

    const messagesScrollbar = useRef(null);

    const [messages, setMessages] = useState(m || []);

    const scrollToBottom = () => {
        if (!messagesScrollbar || !messagesScrollbar.current) {
            return;
        }

        messagesScrollbar.current.view.scroll({
            top: messagesScrollbar.current.view.scrollHeight,
            behavior: 'smooth',
        });
    };

    useEffect(()=>{
        scrollToBottom()
    },[messages]);



    const handleAddMessage = (msg) => {
        setMessages(previosState => (
            [
                ...previosState,
                msg
            ]
        ));
    };



    return (
        <div>
            <Header/>

            <MessengerPageParallax/>

            <div className={classNames(classes1.main, classes1.mainRaised)}>
                <div style={{padding: '0 1rem'}}>
                    <GridContainer style={{height: '75vh'}}>
                        <Grid item sm={3} style={{height: '100%', overflowY: 'auto'}}>
                            <Conversations/>

                        </Grid>

                        <Grid item sm={9}>
                            <div style={{
                                display: 'flex',
                                flexFlow: 'column',
                                height: '100%',
                                padding: '0 0.5rem 0 0.5rem'
                            }}>
                                <Card style={{flexGrow: '1', margin: '0.5rem 0'}}>
                                    <CardBody style={{height: '100%'}}>
                                        <Scrollbars ref={messagesScrollbar} {...SCROLLBAR_CONFIG}
                                                    style={{height: '100%'}}>
                                            {
                                                messages.map(message => (
                                                    <Message key={message._id} photo={message.photo}
                                                             displayName={message.displayName} message={message.message}
                                                             timestamp={message.timestamp} isMine={message.isMine}/>
                                                ))
                                            }
                                        </Scrollbars>
                                    </CardBody>
                                </Card>

                                <MessageTextInput onSubmit={(msg) => {
                                    handleAddMessage(msg)
                                }}/>
                            </div>


                        </Grid>
                    </GridContainer>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
