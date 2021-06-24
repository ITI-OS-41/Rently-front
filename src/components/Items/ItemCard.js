import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from "@material-ui/core/FormControl";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import suit1 from "assets/img/examples/suit-1.jpg";
import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import ItemRating from './ItemRating';


const useStyles = makeStyles(styles);

export default function ItemCard(props) {
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [price, setPrice] = useState('');

  const { item } = props;
  const { username } = item.owner

  const handleChange = (event) => {
    setPrice(
      event.target.value,
    );
  };

  useEffect(() => {

    setList(Object.entries(item.price));
  }, []);


  return (
    <Card plain product>
      <CardBody plain>
        <div className={classes.cardLabel}><small>.67 km</small></div>
        <Link to={`/items/${item._id}`}>
          <img className={classes.cardImage} src={suit1} alt=".." />
        </Link>
        <h5 className={classes.cardTitle}>
          <Link to={`/items/${item._id}`}>{item.name}</Link>
        </h5>
        <div>
          <p className={classes.description}>Assem {item.description}</p>
          <Link to={`/items/${item._id}`} className={classes.storeName}>Owner: {username}</Link><br/>
          <ItemRating itemRate={item.itemRate} />
        </div>
        <FormControl className={classes.formControl}>
          <NativeSelect
            value={price}
            onChange={handleChange}
            className={classes.selectText}
            name="price"
            inputProps={{ 'aria-label': 'price' }}
            disableUnderline
          >
            {list && !!list.length && list.map((price, id) => {
              if (price[1] > 0) {
                return (
                  <option key={id} value={price} className={classes.priceContainer}>
                    ${price[1]}.00 {`${price[0].charAt(0).toUpperCase() + price[0].slice(1)}`}
                  </option>
                )
              }
            })}
          </NativeSelect>
        </FormControl>
      </CardBody>
      {/* <CardFooter plain className={classes.justifyContentBetween}>

      </CardFooter> */}
    </Card>
  );
}
