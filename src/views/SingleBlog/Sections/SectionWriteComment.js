import React, { useState,useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Media from "components/Media/Media.js";
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";
import { UserContext } from './../../../Context';
import { post } from 'functions/request';

import {
    Button,
    TextField,
  } from "@material-ui/core";

import defaultImage from '../../../assets/img/noimagelarge.png';


const sectionCommentsStyle = {


    title: {
        ...title,
        marginBottom: "30px",
        textAlign: "center",
    },
    footerButtons: {
        float: "right",
        backgroundColor:"#00bcd4",
        color: "#FFF",
        marginTop:"10px",
        "&:hover": {
            backgroundColor:"#00bcd4",
            color: "#FFF",
          },
    },

    
};

const useStyles = makeStyles(sectionCommentsStyle); 

export default function SectionWriteComment(props) {
    const classes = useStyles();
    const {postAdded, ...rest}=props
    const id = rest.match.params.id;

    const [text, setText] = useState('');
    const { user } = useContext(UserContext)

     
    const submitComment = (e) =>{
        e.preventDefault();

        if(!text) return;

        post(`comment`,{
            body: text,
            blogPost:id
        })
        .then(res=>{
            setText('')
            postAdded({
                ...res.data,
            commenter: user
        })
        })
    }
    return (
        <div>
            <h3 className={classes.title}>Post your comment</h3>
            <form
                onSubmit={submitComment}
            >
            <Media
                avatar={user.photo || defaultImage}
                body={
                    <TextField
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                  />
                }
                footer={
                    <Button type="submit" round className={classes.footerButtons}>
                        Post comment
                    </Button>
                }
            />
            </form>
        </div>
    );
}
