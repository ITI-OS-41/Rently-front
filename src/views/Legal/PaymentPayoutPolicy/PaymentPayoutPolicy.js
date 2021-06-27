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

export default function PaymentPayoutPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <h1>Payments & Payout Policy</h1>
      <br />
      <h3>Booking Payments:</h3>
      <br />
      <p>
        All payments are processed by Stripe and held in trust by Rently until
        the booking has been completed, then Rently will release the funds to
        the Poster. In order for a Renter to reserve and confirm their booking,
        the Renter must pay at least 50% of the booking’ total. The percentage
        amount to be paid is determined by the booking’ start date. If the
        booking start date is 5 days or less away from the current date, then
        the Renter will be required to pay 100% of the booking total to confirm
        and reserve the item(s).
      </p>
      <br />
      <p>
        If the booking start date is greater than 5 days from the current date
        then the Renter is required to only pay 50% of the booking total to
        confirm and reserve the item(s). The remaining balance will
        automatically be taken from their account on the date that is 5 days
        before the booking start date.
      </p>
      <br />
      <h3>Refunds:</h3>
      <br />
      <p>
        If at any point you do receive a full or partial refund from a booking,
        Rently will always reduce the amount of their service fee, and
        processing fee. Refunds will be determined by the item’s Cancellation
        Policy on the booking and will be sent from Rently.
      </p>
      <p>
        Depending on your bank, you will see it as a credit on your account
        within 5 – 10 business days from the time we process the refund. We can
        only refund the amount back to the credit card used to pay the initial
        balance, it cannot be transferred to a different card or account.
      </p>
      <br />
      <h3>Payouts:</h3>
      <br />
      <p>
        Rently will only release the payout amount to the Poster once the
        booking has been marked as completed and you have submitted your review
        of the renter. Depending on your bank the amount may take 3 – 5 business
        days to reach your account. The Payout Amount will be the booking total
        amount reduced by the Platform Service Fee, Insurance Amounts, Admin
        Fees, and any other outstanding amounts the Poster may owe.
      </p>
      <p>
        Rently does reserve the right to reduce your payout amount if you owe
        any outstanding service or admin fees. Rently also reserves the
        authority to reduce the payout amount if the related booking has any
        refunds or charges from a cancellation or a dispute.
      </p>
      <p>
        Rently will include the tax (if charged) on the booking on the payout to
        your account. This will allow you to collect the tax and pay your local
        government as needed. Please check with a local attorney to see if you
        are required to do so.
      </p>
      <br />
      <h3>Deposits:</h3>
      <br />
      <p>
        The deposit amount is decided by the Poster and will be processed at the
        same time as the booking confirmation payment which is 5 days before the
        booking start date or when the renter pays for the booking total amount.
        In cases of the deposit, there will be an additional processing fee
        deducted from the Payout Amount to the Poster and also charged to the
        Renter. You will be required to pay a deposit admin fee of 1.9% at the
        time of booking.
      </p>
      <p>
        Deposits will be refunded back to the Renter 24 hours after the Booking
        End Date. Depending on your bank it can take anywhere from 5 to 10
        business days to reach your account.
      </p>
      <br />
      <h3>Banking Information:</h3>
      <br />
      <p>
        Rently will ask you to enter your banking information in the payments
        area of your account. Please be aware that this is the only place and
        time that Rently will ask for your banking information. We will never
        ask you to send money via email or e-transfer to us or to another
        member.
      </p>
      <p>
        By entering in your banking information, Rently will be able to
        automatically directly deposit your payout amounts into the specified
        account. You will need to provide the following: Bank Country, Name on
        Account, Routing Number, Account Number, Confirm Account Number.
      </p>
      <br />
      <h3>Taxes:</h3>
      <br />
      <p>
        Rently does give the Poster the ability to collect taxes by adding your
        reference number and tax amount in your settings. The tax amount will be
        included on your payout amount to give you the opportunity to repay your
        local government as necessary. It is your obligation to seek council of
        a certified accountant or attorney to see if you are required to collect
        taxes or not.
      </p>
      <br />
      <p>
        Rently will charge tax on the amounts collected from insurance and the
        platform service fee.
      </p>
      <br />
      <h3>Fees:</h3>
      <br />
      <p>
        here are no fees to register for the Rently Services. However, Rently
        charges fees for each transaction made through the Platform
        (“Transaction Fees” or “Platform Service Fees”). In particular, Rently
        charges Posters a fee for each completed transaction, the fees will be
        deducted upon the payout. Rently charges the Poster 10% Platform Service
        Fee which allows us to maintain and improve the Rently platform and
        provide world-class support to our members. Rently will also add a 1.9%
        processing fee for each transaction on a booking that uses deposits. If
        you rent out an Item as a Poster or rent an Item as a Renter, you agree
        to pay all Platform Service Fees described herein or otherwise quoted to
        you at the time of the transaction.
      </p>
      <br />
      <h3>Questions:</h3>
      <br />
      <p>
        If you do have any questions about payments or payouts, please email us
        at rentlyservice@gmail.com and we will get back to you as soon as we
        can.
      </p>
    </div>
  );
}
