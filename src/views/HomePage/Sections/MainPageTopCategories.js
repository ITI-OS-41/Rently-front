import React, {useEffect, useState} from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";


import {get} from '../../../functions/request.js';

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import CategoryCard from "../../../components/global/CategoryCard";
import LoadingContainer from "../../../components/global/LoadingContainer";


// Slick slider
import "../../../assets/vendors/slick-carousel/slick/slick.css";
import "../../../assets/vendors/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const useStyles = makeStyles(blogsStyle);
const modelName = 'category';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: false
};

export default function MainPageCategories({...rest}) {
  const classes = useStyles();
  const [categories, setCategories] = useState([1,2,3,4,5,6])
  const [isLoading, setIsLoading] = useState(true)


  // useEffect(() => {
  //   get(`/${modelName}`)
  //     .then(response => {
  //       const res = response.data
  //       setCategories(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }, [])


  return (
    <div className="cd-section" {...rest}>
      <div>
        <h2 className={classes.title}>Top Categories</h2>
        <GridContainer>
            <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
        </GridContainer>
      </div>
    </div>
  );
}
