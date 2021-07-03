import React, { useState, useEffect } from "react";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.js";

import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

import Request from "./Sections/Request";
import Confirmed from "./Sections/Confirmed";
import RequestList from "./Sections/RequestList";
import ConfirmedList from "./Sections/ConfirmedList";
import HistoryList from "./Sections/HistoryList";

profilePageStyle.isActive = {
  backgroundColor: "red",
};

const useStyles = makeStyles(profilePageStyle);

export default function Posting(props) {
  const classes = useStyles();

  return (
    <div style={{ padding: "1rem 3rem" }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <h3 className={classes.title + " " + classes.textCenter}>
            My Posting Requests
          </h3>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: "Requests",
                tabContent: <RequestList />,
              },
              {
                tabButton: "confirmed",
                tabContent: <ConfirmedList />,
              },
              {
                tabButton: "history",
                tabContent: <HistoryList/>,
              },
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
