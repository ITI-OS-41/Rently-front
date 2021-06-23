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


const useStyles1 = makeStyles(profilePageStyle);

const c = [
    {
        _id: 11,
        photo: 'https://material-ui.com/static/images/avatar/1.jpg',
        username: 'Remy Sharp',
        isOnline: true
    },
    {
        _id: 321,
        photo: 'https://material-ui.com/static/images/avatar/1.jpg',
        username: 'Remy Sharp',
        isOnline: true
    },
    {
        _id: 41,
        photo: 'https://material-ui.com/static/images/avatar/1.jpg',
        username: 'Remy Sharp',
        isOnline: true
    },
];
const m = [
    {
    _id: 512,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: true,
        photo: c[0].photo,
        displayName: c[0].username
    },
    {
    _id: 3212,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: c[0].photo,
        displayName: c[0].username
    },
    {
        _id: 321,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: true,
        photo: c[0].photo,
        displayName: c[0].username
    },
    {
        _id: 124,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: c[0].photo,
        displayName: c[0].username
    },
    {
        _id: 412,
        message: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
        timestamp: 'timestamp',
        isMine: false,
        photo: c[0].photo,
        displayName: c[0].username
    },
];

export default function MessengerPage(props) {
    const classes1 = useStyles1();

    const messagesScrollbar = useRef(null);


    const [conversations, setConversations] = useState(c || []);
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
        console.log("working")
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

            <Parallax
                image={require("assets/img/examples/city.jpg").default}
                filter="dark"
                style={{height: '14rem'}}
            >
                <h1 className={classes1.title} style={{color: 'white', textAlign: 'center'}}>Messages</h1>
            </Parallax>

            <div className={classNames(classes1.main, classes1.mainRaised)}>
                <div style={{padding: '0 1rem'}}>
                    <GridContainer style={{height: '65vh'}}>
                        <Grid item sm={3} style={{height: '100%', overflowY: 'auto'}}>
                            <Scrollbars  {...SCROLLBAR_CONFIG}>
                                <List>
                                    {
                                        conversations.map(conversation => (
                                            <ListItem button key={conversation._id}>
                                                <ListItemIcon>
                                                    <Avatar alt={conversation.name} src={conversation.photo}/>
                                                </ListItemIcon>
                                                <ListItemText primary="Remy Sharp">{conversation.name}</ListItemText>
                                                {conversation.isOnline &&
                                                <ListItemText secondary="online" align="right"/>}
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Scrollbars>

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
                                        <Scrollbars ref={messagesScrollbar} {...SCROLLBAR_CONFIG} style={{height: '100%'}}>
                                            {
                                                messages.map(message => (
                                                    <Message key={message._id}  photo={message.photo} displayName={message.displayName} message={message.message} timestamp={message.timestamp} isMine={message.isMine}/>
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
