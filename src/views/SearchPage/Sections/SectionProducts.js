import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import suit1 from "assets/img/examples/suit-1.jpg";

import {get} from '../../../functions/request'

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Carousel from "nuka-carousel";
import {CAROUSEL_SETTINGS} from "../../../config";
import PostCard from "../../../components/global/PostCard";
import LoadingContainer from "../../../components/global/LoadingContainer";
import ItemCard from "../../../components/Items/ItemCard";

const useStyles = makeStyles(styles);

const conditions = ["perfect", "very good", "descent", "good", "fair"];

export default function SectionProducts() {

  const [items, setItems] = useState(null)
  const [filters, setFilters] = useState({})
  const [priceRange, setPriceRange] = useState([1, 5000]);
  const [isRequesting, setIsRequesting] = useState(true)
  const [categorys, setCategorys] = React.useState([]);
  const [subcategorys, setSubcategorys] = React.useState([]);
  const [name, setName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const [selectedCondition, setSelectedCondition] = useState(null)

  useEffect(() => {
    get('/category')
      .then(response => {
        setCategorys(response.data.res)
      })
  }, [])

  useEffect(() => {
    selectedCategory && get(`/subcategory?category=${selectedCategory}`)
      .then(response => {
        setSubcategorys(response.data.res)
      })
  }, [selectedCategory])





  useEffect(()=>{
    setFilters(prevState => ({
      ...prevState,
      name,
      priceMin: priceRange[0],
      priceMax: priceRange[1],
      category: selectedCategory,
      subcategory: selectedSubCategory,
      condition: selectedCondition
    }))
  }, [name,priceRange,selectedCategory,selectedSubCategory, selectedCondition])


  useEffect(()=>{
    setIsRequesting(true)

    let query = ""

    for (const property in filters) {
      query += filters[property]?`${property}=${filters[property]}&`:""
    }

    get(`/item?${query}`)
      .then(response => {
        setItems(response.data.res)
      })
      .catch(err=>console.log(err))
      .finally(()=>{
        setIsRequesting(false)
      })
  },[filters])


  useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: priceRange,
        connect: true,
        range: { min: 1, max: 10000 },
        step: 1,
      }).on("update", function (values) {
        setPriceRange([Math.round(values[0]), Math.round(values[1])]);
      });
    }
    return function cleanup() {};
  });

  const classes = useStyles();
  return (
    <div className={classes.section}>
    <div className={classes.container}>
      <h2>Find what you need</h2>
      <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>

                <CustomInput
                  inputProps={{
                    placeholder: "Search keyword",
                    onChange: e=>{setName(e.target.value)}
                  }}
                  formControlProps={{
                    fullWidth: true,
                    style: {
                      marginBottom: '0',
                      padding: '0',
                      marginTop: '0.8rem'
                    },
                  }}
                />

                <Accordion
                  collapses={[
                    {
                      title: "Price Range",
                      content: (
                        <CardBody className={classes.cardBodyRefine}>
                          <span
                            className={classNames(
                              classes.pullLeft,
                              classes.priceSlider
                            )}
                          >
                            {priceRange[0]}
                          </span>
                          <span
                            className={classNames(
                              classes.pullRight,
                              classes.priceSlider
                            )}
                          >
                            {priceRange[1]}
                          </span>

                          <div id="sliderRegular" className="slider-rose" />
                        </CardBody>
                      ),
                    },

                    {
                      title: "Category",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                            {categorys.map(category=>{
                              return (
                                <FormControlLabel
                                  key={category._id}
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() => setSelectedCategory(category._id)}
                                      checked={selectedCategory === category._id}
                                      checkedIcon={
                                        <Check className={classes.checkedIcon} />
                                      }
                                      icon={
                                        <Check className={classes.uncheckedIcon} />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot,
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={category.name}
                                />
                              )
                            })
                          }

                          </div>
                        </div>
                      ),
                    },

                    {
                      title: "SubCategory",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                            {subcategorys.map(subcategory=>{
                              return (
                                <FormControlLabel
                                  key={subcategory._id}
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() => setSelectedSubCategory(subcategory._id)}
                                      checked={selectedSubCategory === subcategory._id}
                                      checkedIcon={
                                        <Check className={classes.checkedIcon} />
                                      }
                                      icon={
                                        <Check className={classes.uncheckedIcon} />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot,
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={subcategory.name}
                                />
                              )
                            })
                          }

                          </div>
                        </div>
                      ),
                    },

                    {
                      title: "Condition",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                            {conditions.map(condition=>{
                              return (
                                <FormControlLabel
                                  key={condition}
                                  control={
                                    <Checkbox
                                      tabIndex={-1}
                                      onClick={() => setSelectedCondition(condition)}
                                      checked={selectedCondition === condition}
                                      checkedIcon={
                                        <Check className={classes.checkedIcon} />
                                      }
                                      icon={
                                        <Check className={classes.uncheckedIcon} />
                                      }
                                      classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot,
                                      }}
                                    />
                                  }
                                  classes={{ label: classes.label }}
                                  label={condition}
                                />
                              )
                            })
                          }

                          </div>
                        </div>
                      ),
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            {items ?
              (<GridContainer>
                {items.map(item => {
                  return (
                    <GridItem key={item._id} md={4} sm={4}>
                      <ItemCard item={item} />
                    </GridItem>
                  )
                })}
              </GridContainer>)
              : <LoadingContainer />}
            <GridItem
              md={3}
              sm={3}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <Button round color="rose">
                Load more...
              </Button>
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
      </div>

  );
}
