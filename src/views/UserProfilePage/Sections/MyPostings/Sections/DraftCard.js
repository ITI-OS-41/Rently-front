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
import { del } from "functions/request";
import history from "functions/history";

import {
  title,
  cardTitle,
  coloredShadow,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

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
  delete: {
    backgroundColor: "#f44336",
  },
  edit: {
    backgroundColor: "#00acc1",
  },
};
const useStyles = makeStyles(sectionInterestedStyle);
const modelName = "item";

export default function SectionPills({ items ,onDelete}) {
  const classes = useStyles();

  const handleDeleteNotification = (id) => {
    const conf = window.confirm(
      `are you sure you want to delete this ${modelName}?`
    );
    if (!conf) {
      return;
    }
    del(`${modelName}/${id}`, `${modelName} deleted successfully!`)
    .then(() => {
      onDelete()
    })
    .catch(e=>{
      console.log(e)
    });
  };

  return (
    <div className={classes.section}>
      <GridContainer>
        {items.map((item) => (
          <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
            <Card plain blog className={classes.styling}>
              <CardHeader image plain>
                <a href="#pablo">
                  <img
                    style={{
                      borderBottomLeftRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                    src={item.photo[0]}
                    alt="..."
                  />
                </a>
                <div
                  // className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${item.photo[0]})`,
                    opacity: "1",
                  }}
                />
              </CardHeader>
              <CardBody plain>
                <Info>
                  <h4 style={{ margin: "0px", padding: "0px" }}>
                    {item.subcategory.name}
                  </h4>
                </Info>
                <h5 className={classes.cardTitle}> {item.name} </h5>

                <h5>owner: {item.owner.name} </h5>
                <div className={classes.description}>{item.description}</div>
                <div>
                  <button className={classes.button + " " + classes.edit}>
                    edit
                  </button>
                  <button
                    className={classes.button + " " + classes.delete}
                    onClick={() => {
                      handleDeleteNotification(item._id);
                    }}
                  >
                    delete
                  </button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
