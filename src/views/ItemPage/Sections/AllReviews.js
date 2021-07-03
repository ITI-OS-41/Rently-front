import React, { useState, useEffect, useContext } from "react";
// import { Switch, Route, Link, NavLink } from "react-router-dom";
// import classNames from "classnames";
import { UserContext } from "../../../Context";

// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";

import { post ,get} from "functions/request";
import SectionComments from './SectionComments';
export default function AllReviews(props) {

  const [rent, setRents] = useState([]);


  useEffect(() => {
    get(`/itemRate`).then((response) => {
      let res = response.data.res;
      setRents(res);
      console.log("setRents ",res);
    });
  }, []);
  return (
    <div >
        
    </div>
  );
}