import React, {useContext, useEffect, useRef, useState} from "react";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import {Scrollbars} from 'react-custom-scrollbars';
import {SCROLLBAR_CONFIG} from "../../config";
import MessageTextInput from "./MessageTextInput";

import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import {Message} from "./Message";
import MessengerPageParallax from "./MessengerPageParallax";
import Conversations from "./Conversations";
import {get, post} from "../../functions/request";
import LoadingContainer from "../../components/global/LoadingContainer";
import NoDataToShow from "../../components/global/NoDataToShow";
import {UserContext} from "../../Context";


const useStyles1 = makeStyles(profilePageStyle);


export default function MessengerPage(props) {

    const classes1 = useStyles1();
    const {user} = useContext(UserContext);

    const [messagesIsLoading, setMessagesIsLoading] = useState(false)
    const messagesScrollbar = useRef(null);

    const [messages, setMessages] = useState([]);

    const [activeConversation, setActiveConversation] = useState();
    const [temp, setTemp] = useState(1);

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

    setTimeout(()=>{
        setTemp(temp+1)
    }, 5000);

    

    useEffect(()=>{
        if (activeConversation){

        get(`message/${activeConversation._id}`)
            .then(res=>{
                if (messages.length !== res.data.length){
                    setMessages(res.data)
                }
            })
        }
    },[activeConversation,temp]);



    const handleAddMessage = (text) => {
        post(`message`,
            {
                "conversationId": activeConversation._id,
                "sender": user._id,
                text
            })
            .then(res=>{
                let newMessage = res.data
                newMessage.sender = user
                setMessages([
                    ...messages,
                    newMessage
                ])
            })
    };



    return (
        <div>
            <Header/>

            <MessengerPageParallax/>

            <div className={classNames(classes1.main, classes1.mainRaised)}>
                <div style={{padding: '0 1rem'}}>
                    <GridContainer style={{height: '75vh'}}>
                        <Grid item sm={3} style={{height: '100%', overflowY: 'auto'}}>
                            <Conversations setConversation={c=>setActiveConversation(c)} {...props} />
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
                                                messagesIsLoading
                                                    ?
                                                    <LoadingContainer/>
                                                    :
                                                    messages.length
                                                        ?


                                                        messages.map(message => (
                                                            <Message key={message._id} message={message}/>
                                                        ))
                                                        :
                                                        <NoDataToShow text="No messages yet"/>
                                            }
                                        </Scrollbars>
                                    </CardBody>
                                </Card>

                                {
                                    activeConversation && (
                                        <MessageTextInput onSubmit={(text) => {
                                            handleAddMessage(text)
                                        }}/>
                                    )
                                }
                            </div>


                        </Grid>
                    </GridContainer>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
