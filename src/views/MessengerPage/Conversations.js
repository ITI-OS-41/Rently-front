import {Scrollbars} from "react-custom-scrollbars";
import {SCROLLBAR_CONFIG} from "../../config";
import * as PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Badge from "@material-ui/core/Badge";
import {get} from "../../functions/request";
import LoadingContainer from "../../components/global/LoadingContainer";
import CategoryCard from "../../components/global/CategoryCard";
import NoDataToShow from "../../components/global/NoDataToShow";


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

export default function (props) {
    const [isLoading, setIsLoading] = useState(true)
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(conversations[0]);


    // get conversations
    useEffect(() => {
        setIsLoading(false)

        get('conversation')
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);


    const handleChangeConversation = (conversation) => {
        setActiveConversation(conversation)
    };


    return <Scrollbars  {...SCROLLBAR_CONFIG}>
        <List>

            {
                isLoading
                    ?
                    <LoadingContainer/>
                    :
                    conversations.length
                        ?
                        conversations.map(conversation => (
                            <ListItem
                                onClick={() => {
                                    handleChangeConversation(conversation)
                                }}
                                selected={activeConversation === conversation}
                                button
                                key={conversation._id}
                            >
                                <ListItemIcon>
                                    <Badge color="primary" variant="dot" invisible={!conversation.isOnline}>
                                        <Avatar alt={conversation.name} src={conversation.photo}/>
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText primary="Remy Sharp">{conversation.name}</ListItemText>
                            </ListItem>
                        ))
                        :
                        <NoDataToShow text="No conversations yet"/>
            }
        </List>
    </Scrollbars>;
}
