import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import {get} from '../../../functions/request.js';

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import LoadingCircle from "../../../components/global/LoadingCircle";
import CategoryCard from "../../../components/global/CategoryCard";
import LoadingContainer from "../../../components/global/LoadingContainer";
import Carousel from "nuka-carousel";
import {CAROUSEL_SETTINGS} from "../../../config";
import PostCard from "../../../components/global/PostCard";
import {shuffle} from "../../../functions/helpers";

const useStyles = makeStyles(blogsStyle);
const modelName = 'blog';




export default function MainPageTopPosts({ ...rest }) {
  const classes = useStyles();
  const [items, setItems] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    get(`/${modelName}?limit=10`)
      .then(response => {
        const res = response.data.res
        setItems(shuffle(res))
      })
      .catch(err=>{
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  },[])


  return (
    <div className="cd-section" {...rest}>
        <div>
          <h2 className={classes.title}>Recent blog posts</h2>
          <GridContainer>
            { items ?
              (<Carousel {...CAROUSEL_SETTINGS}>
                {items.map(item=>{
                  return (<PostCard key={item._id} post={item} />)
                })}
              </Carousel>)
              : <LoadingContainer/> }
          </GridContainer>
        </div>
    </div>
  );
}
