import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
// plugin that creates slider
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import {get} from '../../../functions/request'

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import CustomInput from "../../../components/CustomInput/CustomInput";
import LoadingContainer from "../../../components/global/LoadingContainer";
import ItemCard from "../../../components/Items/ItemCard";
import NoDataToShow from "../../../components/global/NoDataToShow";

const useStyles = makeStyles(styles);

const conditions = ["perfect", "very good", "descent", "good", "fair"];

export default function SectionProducts(props) {
    const params = new URLSearchParams(location.search.substring(1));


    const [items, setItems] = useState(null)
    const [filters, setFilters] = useState({})
    const [priceRange, setPriceRange] = useState([1, 5000]);
    const [isRequesting, setIsRequesting] = useState(true)
    const [categorys, setCategorys] = React.useState([]);
    const [subcategorys, setSubcategorys] = React.useState([]);
    const [name, setName] = useState(params.get('name') || '')
    const [selectedCategory, setSelectedCategory] = useState(params.get('category') || '')
    const [selectedSubCategory, setSelectedSubCategory] = useState(params.get('subcategory') || '')
    const [selectedCondition, setSelectedCondition] = useState(params.get('condition') || '')


    useEffect(() => {
        get('/category?model=item')
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


    useEffect(() => {
        setFilters(prevState => ({
            ...prevState,
            name,
            // priceMin: priceRange[0],
            // priceMax: priceRange[1],
            category: selectedCategory,
            subcategory: selectedSubCategory,
            condition: selectedCondition
        }))
    }, [name, priceRange, selectedCategory, selectedSubCategory, selectedCondition])


    useEffect(() => {
        setIsRequesting(true)

        let query = ""

        for (const property in filters) {
            query += filters[property] ? `${property}=${filters[property]}&` : ""
        }


        //update url
        const newURL = window.location.protocol + "//" + window.location.host + '/search?' + query;
        window.history.pushState({path: newURL}, '', newURL);


        get(`/item?${query}`)
            .then(response => {
                setItems(response.data.res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsRequesting(false)
            })
    }, [filters])


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
                                        value: name,
                                        onChange: e => {
                                            setName(e.target.value)
                                        }
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
                                            title: "Category",
                                            content: (
                                                <div className={classes.customExpandPanel}>
                                                    <div
                                                        className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                                                        {categorys.map(category => {
                                                            return (
                                                                <FormControlLabel
                                                                    key={category._id}
                                                                    control={
                                                                        <Checkbox
                                                                            tabIndex={-1}
                                                                            onClick={() => setSelectedCategory(category._id)}
                                                                            checked={selectedCategory === category._id}
                                                                            checkedIcon={
                                                                                <Check className={classes.checkedIcon}/>
                                                                            }
                                                                            icon={
                                                                                <Check
                                                                                    className={classes.uncheckedIcon}/>
                                                                            }
                                                                            classes={{
                                                                                checked: classes.checked,
                                                                                root: classes.checkRoot,
                                                                            }}
                                                                        />
                                                                    }
                                                                    classes={{label: classes.label}}
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
                                                    <div
                                                        className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                                                        {subcategorys.map(subcategory => {
                                                            return (
                                                                <FormControlLabel
                                                                    key={subcategory._id}
                                                                    control={
                                                                        <Checkbox
                                                                            tabIndex={-1}
                                                                            onClick={() => setSelectedSubCategory(subcategory._id)}
                                                                            checked={selectedSubCategory === subcategory._id}
                                                                            checkedIcon={
                                                                                <Check className={classes.checkedIcon}/>
                                                                            }
                                                                            icon={
                                                                                <Check
                                                                                    className={classes.uncheckedIcon}/>
                                                                            }
                                                                            classes={{
                                                                                checked: classes.checked,
                                                                                root: classes.checkRoot,
                                                                            }}
                                                                        />
                                                                    }
                                                                    classes={{label: classes.label}}
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
                                                    <div
                                                        className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>

                                                        {conditions.map(condition => {
                                                            return (
                                                                <FormControlLabel
                                                                    key={condition}
                                                                    control={
                                                                        <Checkbox
                                                                            tabIndex={-1}
                                                                            onClick={() => setSelectedCondition(condition)}
                                                                            checked={selectedCondition === condition}
                                                                            checkedIcon={
                                                                                <Check className={classes.checkedIcon}/>
                                                                            }
                                                                            icon={
                                                                                <Check
                                                                                    className={classes.uncheckedIcon}/>
                                                                            }
                                                                            classes={{
                                                                                checked: classes.checked,
                                                                                root: classes.checkRoot,
                                                                            }}
                                                                        />
                                                                    }
                                                                    classes={{label: classes.label}}
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
                        {isRequesting ? <LoadingContainer/> : items.length ?
                            (<GridContainer>
                                {items.map(item => {
                                    return (
                                        <GridItem key={item._id} md={4} sm={4}>
                                            <ItemCard item={item}/>
                                        </GridItem>
                                    )
                                })}
                            </GridContainer>) : <NoDataToShow text="no items meets your criteria"/>
                        }
                    </GridItem>
                </GridContainer>
            </div>
        </div>

    );
}
