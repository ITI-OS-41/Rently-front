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

export default function InsurancePolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <h1>Insurance Policy</h1>
      <br />
      <h2>Coverage Policy</h2>
      <br />
      <h3>Definitions</h3>
      <br />
      <p>
        “Insurance” means the insurance policy underwritten by Northbridge
        General Insurance Corporation.
      </p>
      <br />
      <p>
        “Rently Protection” means Rently’s policy in respect of claims valued at
        less than $5,000CDN.
      </p>
      <br />
      <h3>Eligibility:</h3>
      <br />
      <p>
        Insurance and Rently Protection is available to Posters (not Renters).
      </p>
      <br />
      <p>
        n order for your Item(s) to be eligible for Insurance coverage or Rently
        Protection, you must not fall under any category or statement under the
        Exclusion Policy. You must also follow our Eligible Policy and Claim
        process.
      </p>
      <br />
      <li>
        The claim must be submitted within 48 hours of the booking’ end date &
        time
      </li>
      <li>
        The booking must have been paid for in full and organized through Rently
      </li>
      <li>
        The claim is not due to negligence or not following a regular or
        recommended maintenance schedule
      </li>
      <li>Proof is provided of the claim with time stamps to be valid</li>
      <li>Must follow the deductibles</li>
      <li>
        Must pay for the insurance upon paying for the booking or agree to pay
        from the booking payout amount
      </li>
      <li>Insurable value is up to $50,000.00</li>
      <br />
      <p>
        Be sure to limit the chances of having to submit a claim by performing
        inspections of your item(s) both before and after the booking in front
        of the other member. Double check all electrical and mechanical
        functions of your item and document with a video recording.
      </p>
      <br />
      <h3>Exclusions:</h3>
      <br />
      <p>
        If your Item falls into the exclusions category, it will not be covered
        by our insurance partners or Rently Protection. Please read the list
        below:
      </p>
      <br />
      <li>Firearms, swords, knives</li>
      <li>Illegal items</li>
      <li>Drones, aircraft</li>
      <li>Bounce houses, trampolines, inflatable devices</li>
      <li>Watercraft over 8 meters</li>
      <li>Expendable items (light bulbs, batteries, etc.)</li>
      <br />
      <p>
        Any claim arising from the Poster’s negligence or failure to conduct
        reasonable maintenance will not be covered. Any Item that is booked
        outside of the Rently platform will not be eligible for Insurance
        coverage or Rently Protection. In cases where the Poster was dishonest
        regarding their Item’s value, Rently reserves the right to deny the
        claim associated with that item.
      </p>
      <br />
      <p>
        A person may be excluded from the Rently Protection or Insurance
        coverage if that person falls under the statements below:
      </p>
      <br />
      <li>
        Have submitted more than 3 claims in the past 5 years to an insurance
        company
      </li>
      <li>
        Has been charged or convicted of impaired driving, fraud or any other
        criminal offence
      </li>
      <li>Have claimed or filed for bankruptcy</li>
      <li>
        Have been denied or refused of insurance coverage or had your policy
        canceled
      </li>
      <br />
      <h3>Coverage:</h3>
      <br />
      <p>
        Insurance and Rently Protection is on a per Item basis and the price
        will be calculated based off of Item(s) value, and risk level. Insurance
        and Rently Protection is at the option of the Poster. Posters are
        required to submit an accurate valuation of the Item(s) being insured at
        the time the insurance is purchased.
      </p>
      <br />
      <p>Coverage:</p>
      <br />
      <li>Theft, and damages to the Item</li>
      <br />
      <h3>Geographic:</h3>
      <br />
      <p>
        In areas where Insurance coverage is not active, we are giving the
        Poster the option to add a deposit amount for the item. The deposit will
        be returned to the Renter after the booking has been completed and no
        disputes are filed.
      </p>
      <br />
      <h3>Claim Process:</h3>
      <br />
      <p>
        The claim must be submitted within 48 hours of the booking end date,
        otherwise, it will not be accepted or reviewed. Please follow the steps
        below to successfully submit your claim or dispute. If you have your own
        insurance policy, you must follow their process before submitting a
        claim through Rently.
      </p>
      <br />
      <li>Go to the booking’s Itinerary page</li>
      <li>Click on the “disputes” button at the bottom of the page</li>
      <li>Select the reason for your dispute</li>
      <li>
        Enter an explanation and reason for the dispute. Please provide as much
        detail as possible with timeframes and dates.
      </li>
      <li>Submit the dispute</li>
      <li>Upload picture or video proof to attach to the submitted dispute</li>

      <li>Wait until a member of Rently contacts you to follow up</li>
      <br />
      <p>
        Please provide as much detail and as much proof as you can. If any
        witnesses are involved, please provide their contact information as
        well.
      </p>
      <h3>Theft:</h3>
      <br />
      <p>
        In the result of theft of an Item during a booking, you must file a
        police report before submitting an insurance claim. Rently reserves the
        right to file its own police report where it deems necessary.
      </p>
      <br />
      <h3>Deposits:</h3>
      <br />
      <p>
        As the Poster you are able to choose between our pre-selected options of
        deposit amounts which the member renting must pay before your booking
        start date. Having a required deposit on your item will force the member
        renting your Item to pay our third-party processing fee of 2.9% in
        addition to the deposit amount. In the occurrence of a claim, you will
        only be able to claim a maximum amount of the total deposit.
      </p>
      <br />
      <h3>Disclaimer:</h3>
      <br />
      <p>
        Please be aware that Rently and our insurance partner will review and
        asses each claim fairly and without bias to come to the best solution
        for our members. We cannot guarantee a time frame for when a solution
        will be presented for a claim. Any applicable deductible must be paid
        before funds will be released by the insurer or Rently. Rently and our
        partners take fraud and illegal activities very seriously; if you are
        suspected of such activities we will report you to the local authorities
        with proof. All determinations and solutions made by Rently and our
        partners are final and will be made in accordance with Rently’s terms or
        service and any applicable insurance policies.
      </p>
    </div>
  );
}
