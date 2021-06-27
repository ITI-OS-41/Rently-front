/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function CancellationPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <h1>
        <b>Cancellation Policy</b>
      </h1>
      <br />
      <h2>Options:</h2>
      <br />
      <h3>1 – Easy Going</h3>
      <br />
      <p>
        a.) If the member booking the item sends a cancellation notification at
        least 48 hours before the booking Start Date and Time, they are entitled
        to a full refund minus the booking fee, and payment processing fee. The
        item price and any additional price including delivery will be refunded.
      </p>
      <br />
      <p>
        b.) Extenuating circumstances may override any service or refund
        percentage. Rently also has the ultimate authority to agree or deny the
        member’s refund entitlement.
      </p>
      <br />
      <p>
        c.) If the member booking the item cancels the booking less than 1 day
        (24 hours) they will NOT be entitled to a refund of any amount.
      </p>
      <br />
      <br />
      <p>
        a.) If the member booking the item sends a cancellation notification 4
        days (96 hours) before the booking Start Date and Time, they are
        entitled to a full refund of the full booking value. The amount refunded
        will be less the booking fee, and payment processing fee.
      </p>
      <br />
      <p>
        b.) Extenuating circumstances may override any service fee or refund
        percentage. Rently also has the ultimate authority to agree or deny the
        member’s refund entitlement.
      </p>
      <br />
      <p>
        c.) If the member booking the item cancels the booking less than 4 days
        (96 hours) they will NOT be entitled to a refund of any amount.
      </p>
      <br />
      <h3>3 – Strict</h3>
      <br />
      <p>
        a.) If the member booking the item sends a cancellation notification 7
        days (168 hours) before the booking Start Date and Time, they are
        entitled to a 50% refund of the full booking value. (the second payment
        will not be processed).
      </p>
      <br />
      <p>
        b.) Extenuating circumstances may override any service fee or refund
        percentage. Rently also has the ultimate authority to agree or deny the
        member’s refund entitlement.
      </p>
      <br />
      <p>
        c.) If the member booking the item cancels the booking less than 7 days
        (168 hours) they will NOT be entitled to a refund of any amount.
      </p>
      <br />
      <h3>Cancellation Policy for Posters:</h3>
      <br />
      <p>
        As a Poster, you are held to a higher standard of a Cancellation Policy
        than a member booking an item. The member booking your item is counting
        on having it for their booking period, and if they do not it may have
        heavy consequences.
      </p>
      <br />
      <h3>For Posters using Availability Checks:</h3>
      <br />
      <p>
        a.) You will be charged a Cancellation Service Fee which will be
        deducted on the next payouts until it has been paid off. The service fee
        may vary depending on the time before the booking start date.{" "}
        <b>
          (The service fee amount can also be higher if you cancel multiple
          items in a booking).
        </b>{" "}
        Rently ultimately has the authority to increase or decrease the amount
        on a case by case basis.
      </p>
      <br />
      <li>
        More than 7 days (168 hours) before the booking start date the service
        fee will be $40.00
      </li>
      <li>
        Less than 7 days (168 hours) before the booking start date the service
        fee will be $70.00
      </li>
      \
      <br />
      <p>
        b.) A cancellation review will be left on your profile explain you had
        canceled an item “x” amount of time before the booking start date.
      </p>
      <br />
      <p>
        c.) If you cancel more than 3 items on 3 separate bookings your account
        and postings may be suspended or deactivated upon review by Rently.
      </p>
      <br />
      <p>d.) You may lose your title as a Pro User depending on the case.</p>
      <br />
      <h3>Posters using Calendar Booking:</h3>
      <br />
      <p>
        a.) You will be charged a Cancellation Service Fee which will be
        deducted on the next payouts until it has been paid off. The service fee
        may vary depending on the time before the booking start date.{" "}
        <b>
          The service fee amount can also be higher if you cancel multiple items
          in a booking.
        </b>{" "}
        Rently ultimately has the authority to increase or decrease the amount
        on a case by case basis.
      </p>
      <br />
      <li>
        Less than 5 days (120 hours) before the booking start date the service
        fee will be <b>$50.00</b>{" "}
      </li>
      \
      <br />
      <p>
        b.) A cancellation review will be left on your profile explain you had
        canceled an item less than 5 days before the booking start date.
      </p>
      <br />
      <p>
        c.) If you cancel more than 3 items on 3 separate bookings your account
        and postings may be suspended or deactivated upon review by Rently.
      </p>
      <br />
      <p>d.) You may lose your title as a Pro Member depending on the case.</p>
      <br />
      <h3>Extenuating Circumstances:</h3>
      <br />
      <p>
        Rently reserves the right to overrule any policy on a case by case basis
        if certain extenuating circumstances are proven. Please be sure to
        include your circumstances when you send in your dispute. These include
        but are not limited to:
      </p>
      <br />
      <li>Natural disaster</li>
      <li>Death in the family</li>
      <li>Unexpected serious illness of Renter or Poster</li>
      <li>Severe damage or unforeseen issues with the item</li>
      <li>Political restrictions</li>
      <li>
        Misrepresentation of the posted item by condition rating or description
      </li>
      <li>
        There is a negative review made on the profile of the Poster after the
        booking has been confirmed
      </li>
    </div>
  );
}
