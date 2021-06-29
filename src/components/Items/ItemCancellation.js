import React, { useEffect, useState } from "react";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import presentationStyle from "../../assets/jss/material-kit-pro-react/views/presentationStyle.js";
import Typography from "@material-ui/core/Typography";

const customStyle = {
  cancellation:{
    fontWeight:"bold",
    color:"#f44336"
  }
}
const useStyles = makeStyles({
  ...presentationStyle,
  ...customStyle,

});

export default function ItemCancellation(props) {
  const itemPolicy = props.itemPolicy;

  const classes = useStyles();
  if (itemPolicy === "reasonable") {
    return (
      <div>
        <p>
          Cancellation policy is <strong className={classes.cancellation} color="warning">Reasonable.</strong>
        </p>
        <p>
          Full refund will be issued if cancelled greater than 4 days before
        </p>
        <p>
          If the member booking the item sends a cancellation notification 4
          days (96 hours) before the booking Start Date and Time, they are
          entitled to a full refund of the full booking value. The amount
          refunded will be less the booking fee, and payment processing fee.
        </p>
      </div>
    );
  } else if (itemPolicy === "easygoing") {
    return (
      <div>
        <p>
          Cancellation policy is <strong color="warning">Easy-Going.</strong>
        </p>
        <p>
          Full refund will be issued if cancelled greater than 2 days before
        </p>
        <p>
          If the member booking the item sends a cancellation notification at
          least 48 hours before the booking Start Date and Time, they are
          entitled to a full refund minus the booking fee, and payment
          processing fee. The item price and any additional price including
          delivery will be refunded.
        </p>
      </div>
    );
  } else if (itemPolicy === "strict") {
    return (
      <div>
        <p>
          Cancellation policy is <strong className={classes.cancellation}>Strict.</strong>
        </p>
        <p>
          Full refund will be issued if cancelled greater than 7 days before
        </p>
        <p>
          If the member booking the item sends a cancellation notification 7
          days (168 hours) before the booking Start Date and Time, they are
          entitled to a 50% refund of the full booking value.
        </p>
      </div>
    );
  }
}
