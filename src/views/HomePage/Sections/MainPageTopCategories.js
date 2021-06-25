import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import Carousel from 'nuka-carousel';


import {get} from '../../../functions/request.js';

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import CategoryCard from "../../../components/global/CategoryCard";
import LoadingContainer from "../../../components/global/LoadingContainer";

import {CAROUSEL_SETTINGS} from '../../../config'



const useStyles = makeStyles(blogsStyle);
const modelName = 'category';



export default function MainPageCategories({...rest}) {
  const classes = useStyles();
  const [categories, setCategories] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    get(`/${modelName}`)
      .then(response => {
        const res = response.data.res
        setCategories(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])


  return (
    <div className="cd-section" {...rest}>
      <div>
        <h2 className={classes.title}>Top Categories</h2>
        <GridContainer>
          { categories?
            (<Carousel {...CAROUSEL_SETTINGS}>
              {categories.map(item=>{
                return (<CategoryCard key={item._id} category={item} />)
              })}
            </Carousel>)
            : <LoadingContainer/> }
        </GridContainer>
      </div>
    </div>
  );
}
