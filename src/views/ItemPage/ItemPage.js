/*eslint-disable*/
import React, { useEffect, useState,useContext } from "react";

import { Link, useParams } from 'react-router-dom';
import { get } from '../../functions/request';

// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import LoadingContainer from "../../components/global/LoadingContainer";

import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Accordion from "../../components/Accordion/Accordion.js";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import ItemRating from '../../components/Items/ItemRating';
import ItemCancellation from '../../components/Items/ItemCancellation';
import ItemRent from '../../components/Items/ItemRent.js';
import {UserContext} from "../../Context";

import { Divider } from "@material-ui/core";

import NoDataToShow from "../../components/global/NoDataToShow";

const customStyle = {
  timeRateLabel: {
    textAlignEnd: "center",
    fontSize: "14px",
    padding: "0 2.5rem",

  },
  valueRateLabel: {
    fontSize: "18px",
    whiteSpace: "nowrap",
    overFlow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "600!important",
    padding: "0 .7rem",
    width: "100%"


  },
  storeName: {
    letterSpacing: "0",
    textAlignLast: "left",
    fontSize: "12px",
    color: "#00acc1!important",
    width: "100%",
    fontWeight: "700!important"
  },
  cartButton: {
    width: "100%",
    textTransform: "capitalize"
  },
  selectColor: {
    color: "#00acc1",
  },
}

const useStyles = makeStyles({
  ...presentationStyle,
  ...productStyle,
  ...customStyle,
});

export default function ItemPage(props) {

  const classes = useStyles();
  const id = props.match.params.id;

  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const [priceSelect, setPriceSelect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    get(`/item/${id}`)
      .then(response => {
        const res = response.data
        console.log(res);
        setItem(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])


  return (

    <div className={classes.productPage}>

      <Header />
     
          <div className={classNames(classes.main, classes.mainRaised)} style={{margin: '-300px 30px 0px'}}>
              {isLoading ? <LoadingContainer /> : ( <GridContainer>

                 <GridItem md={4} sm={6}>
                   {item.photo.length ? ( <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={item.photo || images}
                    showThumbnails={true}
                    renderLeftNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-left-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                    renderRightNav={(onClick, disabled) => {
                      return (
                        <button
                          className="image-gallery-right-nav"
                          disabled={disabled}
                          onClick={onClick}
                        />
                      );
                    }}
                  /> ) : <NoDataToShow text="No photos for this product"/> }
                </GridItem>
                <GridItem md={8} sm={6}>
                  <h1 className={classNames(classes.title, classes.CardText)}>{item.name}</h1>
                  <span className="prices"><small>{item.location.address}</small></span><br />
                  <small><ItemRating itemRate={item.itemRate} /></small>
                  <GridItem md={12} sm={6}>
                    <GridContainer>
                      {Object.entries(item.price).map((price, id) => {
                        if (price[1] > 0) {
                          return (
                            <span key={id} >
                              <span className={classes.valueRateLabel}>EGP${price[1]}.00</span>
                              <Divider orientation="vertical" flexItem />
                              <span className={classes.timeRateLabel}>{price[0]}</span>
                            </span>
                          )
                        }
                      })}
                    </GridContainer>
                  </GridItem>

                  <Accordion
                    active={0}
                    activeColor="info"
                    collapses={[
                      {
                        title: `${item.name} - ${item.condition}`,
                        content: (
                          <p>
                            {item.description}
                          </p>
                        ),
                      },
                      {
                        title: `Owned by`,
                        content: (
                          <p>
                            <strong>{item.owner.username}</strong> <br />
                            <small>{item.location.address}</small> <br />
                            <Link to={`/user/${item.owner._id}`} className={classes.storeName}>View store</Link>
                          </p>
                        ),
                      },
                      {
                        title: "Pickup & Return Options",
                        content: (
                          <strong>{item.deliverable ? 'Delivery option is available.' : 'No Delivery Option.'}</strong>
                        ),
                      },
                      {
                        title: "Cancellation",
                        content: (
                          <ItemCancellation itemPolicy={item.cancellation} />
                        ),
                      },
                    ]}
                  />

                  <small><em><strong>Starting at </strong>EGP${Math.min(...Object.values(item.price))}.00</em></small><br />

                  <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                  >
                    <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={priceSelect}
                        onChange={(event) => setPriceSelect(event.target.value)}
                        inputProps={{
                          name: "priceSelect",
                          id: "price-select",
                        }}
                    >
                      {Object.keys(item.price).map((time, timeIndex) => {
                        return (<MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value={time}
                            key={timeIndex}

                        >
                          ${item.price[time]}.00 {`${time[0].charAt(0).toUpperCase() + time[0].slice(1)}`}
                        </MenuItem>)
                      })}
                    </Select>
                  </FormControl>

                  <ItemRent item={item} priceSelect={priceSelect>0?priceSelect:Math.min(...Object.values(item.price))} user={user._id}/>

                </GridItem>

              </GridContainer> )}
            </div>
      <Footer />
    </div>
  );
}
