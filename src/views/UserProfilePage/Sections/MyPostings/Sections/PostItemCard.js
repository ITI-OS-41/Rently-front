import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import { post } from "functions/request";
import history from "functions/history";

import {
  title,
  cardTitle,
  coloredShadow,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";
import PostItemCard from "./PostItemCard";

const sectionInterestedStyle = {
  title,
  cardTitle,
  coloredShadow,
  textCenter: {
    textAlign: "center",
  },
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "0",
  },
  description: {
    color: grayColor[0],
  },
  styling: {
    padding: "0",
    margin: "0",
    marginBottom: "25px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    textAlign: "center",
  },
  button: {
    marginRight: "8px",
    marginTop: "15px",
    padding: "5px 15px",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  Nap: {
    backgroundColor: "#f44336",
  },
  edit: {
    backgroundColor: "#00acc1",
  },
};
const useStyles = makeStyles(sectionInterestedStyle);
const modelName = "item";

export default function (props) {
  const { item, ...rest } = props;

  const classes = useStyles();
  const [currentItem, setCurrentItem] = useState(item);
   
  const handleEditItem = (id) => {
      console.log("currentItem---->", currentItem) ;
    post(
      `${modelName}/${id}`,
      {
          ...currentItem ,
          isAvailable: !currentItem.isAvailable
      },
      `Your${modelName} is not avilable for renting`
    ).then(res => {
        setCurrentItem(res.data)
    })
    .catch(e=>{
        console.log(e)
    })
  };

  return (
    <Card {...rest} plain blog className={classes.styling}>
      <CardHeader image plain>
        <a href="#pablo">
          <img
            style={{
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
            src={currentItem.photo[0]}
            alt="..."
          />
        </a>
        <div
          // className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${currentItem.photo[0]})`,
            opacity: "1",
          }}
        />
      </CardHeader>
      <CardBody plain>
        <Info>
          <h4 style={{ margin: "0px", padding: "0px" }}>
            {currentItem.subcategory.name}
          </h4>
        </Info>
        <h5 className={classes.cardTitle}> {currentItem.name} </h5>

        <h5>owner: {currentItem.owner.name} </h5>
        <div className={classes.description}>{currentItem.description}</div>
        <div>
          <button className={classes.button + " " + classes.edit}>edit</button>
          <button
            className={classes.button + " " + classes.Nap}
            onClick={() => {
              handleEditItem(currentItem._id);
            }}
          >
            {currentItem.isAvailable ? "Nap" : "Un nap"}
          </button>
        </div>
      </CardBody>
    </Card>
  );
}
