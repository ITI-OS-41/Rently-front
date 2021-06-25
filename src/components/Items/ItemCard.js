import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from "@material-ui/core/FormControl";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import suit1 from "../../assets/img/examples/suit-1.jpg";
import styles from "../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";
import ItemRating from './ItemRating';
import history from "functions/history";


const customStyle = {
  cardImage: {
    objectFLit: "cover",
    borderRadius: "0 0 5px 5px",
    borderLeft: "1px solid #dee2e6",
    borderRight: "1px solid #dee2e6",
    borderBottom: "1px solid #dee2e6",
    padding: "0px",
    width: "100%"
  },
  formControl: {
    display: "block",
    width: "100%",
    height: "calc(1.5em + .75rem + 2px)",
    color: "#495057",
    border: "1px solid #ced4da",
    borderRadius: "3px",
    padding: "0px",
  },
  selectText: {
    width: "100%",
    color: "#484848",
    backgroundColor: "#ffffff",
    textAlignLast: "center",
    verticalAlign: "middle",
    justifyContent: "center"
  },
  storeName: {
    letterSpacing: "0",
    textAlignLast: "left",
    fontSize: "12px",
    color: "#3f3f3f!important",
    width: "100%",
    fontWeight: "700!important"
  }, itemTitle: {
    textAlign: "left",
    marginBottom: "0px !important",
    textTransform: "capitalize",
    color: "#3f3f3f",
  },
  cardLabel: {
    border: "1px solid #ced4da",
    borderRadius: "5px 5px 0 0",
    textAlignLast: "right",
  },
  cardDescription: {
    color: "#3f3f3f!important",
    textTransform: "capitalize",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "block",
    textOverflow: "ellipsis",
    fontWeight: "400",
    margin: "0"

  }
}
const useStyles = makeStyles({
  ...styles,
  ...customStyle,
});

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
        <Link to={`/items/${item._id}`}  onClick={() => history.push("/items/" + item._id)}>
          <img className={classes.cardImage} src={suit1} alt=".." />
        </Link>
        <h5 className={classNames(classes.cardTitle, classes.itemTitle)}>
          <Link to={`/items/${item._id}`}>{item.name}</Link>
        </h5>
        <div>
          <p className={classes.cardDescription}>Assem {item.description}</p>
          <Link to={`/items/${item._id}`} className={classes.storeName} onClick={() => history.push("/items/" + item._id)}>Owner: {username}</Link><br />
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
    </Card>
  );
}
