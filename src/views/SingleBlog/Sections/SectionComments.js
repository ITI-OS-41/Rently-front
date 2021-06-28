import React,{useState,useEffect} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Media from "components/Media/Media.js";
import SectionWriteComment from "./SectionWriteComment";

import { get } from 'functions/request';
import { grayColor, title } from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import { dateTime } from 'functions/helpers';

const sectionCommentsStyle = {
  ...tooltipsStyle,
  section: {
    backgroundposition: "50%",
    backgroundSize: "cover",
    padding: "20px 0 70px",
  },
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

export default function SectionComments(props) {
  const id = props.match.params.id;

  const [comments, setComments]=useState([]);

  useEffect(()=>{
    get(`/comment?blogPost=${id}&limit=9999`)
    .then(res=>{
      setComments(res.data.res)
    })
  },[])


  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={8}>
          <div>
            <h3 className={classes.title}>Comments</h3>
           
           {
             comments && (
               comments.map(comment=>(
                <Media
                    key={comment._id}
                avatar={comment.commenter.photo}
                title={
                  <span>
                    {comment.commenter.username} <small> {dateTime(comment.createdAt)}</small>
                  </span>
                }
                body={
                  <p className={classes.color555}>
                   {comment.body}.
                  </p>
                }
              />
               ))
             )
           }

            <SectionWriteComment postAdded={newComment=>setComments([...comments,newComment])} {...props}/>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
