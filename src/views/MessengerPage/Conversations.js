import {Scrollbars} from "react-custom-scrollbars";
import {SCROLLBAR_CONFIG} from "../../config";
import * as PropTypes from "prop-types";
import React, {useContext, useEffect, useState} from "react";
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
import {UserContext} from "../../Context";


export default function (props) {
    const {setConveration, ...rest} = props;
    const [isLoading, setIsLoading] = useState(true)
    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(conversations[0]);

    const {user} = useContext(UserContext);

    // get conversations
    useEffect(() => {
        setIsLoading(true)

        get('conversation')
            .then(res => {
                setConversations(res.data)
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
        setConveration(conversation)
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
                            conversation.members.map(member=>(
                                (member._id !== user._id) && (

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
                                                <Avatar alt={member.username} src={member.photo}/>
                                            </Badge>
                                        </ListItemIcon>
                                        <ListItemText primary={member.username}>{member.username}</ListItemText>
                                    </ListItem>

                                )
                            ))
                        ))
                        :
                        <NoDataToShow text="No conversations yet"/>
            }
        </List>
    </Scrollbars>;
}
