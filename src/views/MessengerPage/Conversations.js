import {Scrollbars} from "react-custom-scrollbars";
import {SCROLLBAR_CONFIG} from "../../config";
import React, {useContext, useEffect, useState} from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import Badge from "@material-ui/core/Badge";
import {get} from "../../functions/request";
import LoadingContainer from "../../components/global/LoadingContainer";
import NoDataToShow from "../../components/global/NoDataToShow";
import {UserContext} from "../../Context";
import {changeQueryParamsURL} from "../../functions/helpers";
import { TextField } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";


export default function (props) {
    const {user} = useContext(UserContext);


    const {setConversation, ...rest} = props;
    const [isLoading, setIsLoading] = useState(true)
    const [conversations, setConversations] = useState([]);
    const [filteredConversations, setFilteredConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState();
    const [search,setSeatch]=useState('');


    // get conversations
    useEffect(() => {
        setIsLoading(true);

        get('conversation')
            .then(res => {
                if(res.data.length){
                    setConversations(res.data)
                    setFilteredConversations(res.data)
                }
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setIsLoading(false)
            });
    }, []);


    useEffect(()=>{
        const convId = rest?.location?.search.split('?')[1];
        if (convId){
            conversations.forEach(con=>{
                if(convId == con._id){
                    handleChangeConversation(con)
                }
            })
        } else {
            handleChangeConversation(conversations[0])
        }
    },[conversations]);


    // filter conversations
    useEffect(()=>{
        if(!search){
            setFilteredConversations(conversations)
         }
        else {
            let res = conversations.filter(conversation=>{
                for (let i=0;i<conversation.members.length;i++){
                    if(conversation.members[i].username !== user.username) {
                        let u = conversation.members[i]
                        let regex = new RegExp(`${u.username}|${u.firstname}|${u.lastname}`,'gi');
                        return regex.test(search)
                    }
                }
            })
            setFilteredConversations(res)
        }
    },[search]);


    const handleChangeConversation = (conversation) => {
        if (conversation){
            setActiveConversation(conversation)
            setConversation(conversation)
            changeQueryParamsURL(`?${conversation._id}`)
        }
    };


    return <Scrollbars  {...SCROLLBAR_CONFIG}>
        <List>
            <ListItem>
                <TextField
                    variant="outlined"
                    fullWidth
                    label="Search"
                    margin="dense"
                    value={search}
                    onChange={e=>setSeatch(e.target.value)}
                />
            </ListItem>
            {
                isLoading
                    ?
                    <LoadingContainer/>
                    :
                    filteredConversations.length
                        ?
                        filteredConversations.map(conversation => (
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
