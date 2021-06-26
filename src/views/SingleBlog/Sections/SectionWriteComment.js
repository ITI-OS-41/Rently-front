import React, { useState,useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Media from "components/Media/Media.js";
import profile6 from "assets/img/faces/card-profile6-square.jpg";
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { UserContext } from './../../../Context';
import {
    Typography,
    Button,
    TextField,
    FormHelperText,
    FormControlLabel,
  } from "@material-ui/core";
  import { post } from 'functions/request';


const sectionCommentsStyle = {


    title: {
        ...title,
        marginBottom: "30px",
        textAlign: "center",
    },
    footerButtons: {
        float: "right",
    },
    color555: {
        "&,& *": {
            color: grayColor[15] + " !important",
        },

    },
};

const useStyles = makeStyles(sectionCommentsStyle);

export default function SectionWriteComment(props) {
    const classes = useStyles();
    const id = props.match.params.id;

    const [text, setText] = useState('');
    const { user } = useContext(UserContext)

    
    const submitComment = (e) =>{
        e.preventDefault();

        if(!text) return;

        post(`comment`,{
            body: text,
            blogPost:id
        })
    }
    return (
        <div>
            {text}
            <h3 className={classes.title}>Post your comment</h3>
            <form
                onSubmit={submitComment}
            >
            <Media
                avatar={user.profilePhoto || ''}
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
                    <Button type="submit" color="primary" round className={classes.footerButtons}>
                        Post comment
                    </Button>
                }
            />
            </form>
        </div>
    );
}
