import {Scrollbars} from "react-custom-scrollbars";
import {SCROLLBAR_CONFIG} from "../../config";
import * as PropTypes from "prop-types";
import React, {useState} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Badge from "@material-ui/core/Badge";


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

export default function(props) {
    const [conversations, setConversations] = useState(c || []);
    const [activeConversation,setActiveConversation] = useState(conversations[0]);

    const handleChangeConversation = (conversation) => {
        setActiveConversation(conversation)
    };


    return <Scrollbars  {...SCROLLBAR_CONFIG}>
        <List>
            {
                conversations.map(conversation=>(
                        <ListItem
                            onClick={()=>{handleChangeConversation(conversation)}}
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
            }
        </List>
    </Scrollbars>;
}
