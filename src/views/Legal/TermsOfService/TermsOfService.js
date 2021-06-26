/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../../../components/global/Header.js";
import Footer from "../../../components/global/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";

const useStyles = makeStyles(aboutUsStyle);

export default function TermsOfService() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  return (
    <div>
      <h1>Terms of Service</h1>
      <h3>Rently TERMS OF SERVICE</h3>
      <p>
        PLEASE READ THE FOLLOWING TERMS OF SERVICE ( <b>“TERMS”</b> ) CAREFULLY
        AS THEY WILL OUTLINE AND CONTAIN IMPORTANT INFORMATION. IF YOU DO NOT
        AGREE WITH THE FOLLOWING TERMS, DO NOT SIGN UP TO THE Rently PLATFORM OR
        USE ANY OF THE Rently INC. SERVICES. THIS IS A LEGALLY BINDING AGREEMENT
        BETWEEN Rently AND THE USER.
      </p>
      <br />
      <p>
        Rently INC. (HEREAFTER REFERRED TO AS <b>“Rently”</b>/ <b>“WE”</b> /{" "}
        <b>”US”</b> / <b>“OUR”</b> ) OWNS AND OPERATES THE WEBSITE LOCATED AT
        WWW.Rently.COM (THE
        <b>“WEBSITE”</b> ) AND THE Rently APPLICATION ( <b>“APP”</b> ). THE
        Rently WEBSITE AND APPLICATION WILL BE KNOWN AS THE ( <b>“PLATFORM”</b>{" "}
        ). OUR PROPRIETARY PLATFORM ENABLES REGISTERED POSTERS ({" "}
        <b>“POSTERS”</b> ) TO LIST THEIR TANGIBLE ITEMS FOR LEASE TO OTHER USERS
        (<b>“RENTERS”</b> ) AND ALLOWS RENTERS TO SEND PAYMENTS THROUGH THE
        PLATFORM, AS WELL AS OTHER RELATED SERVICES (THE <b>“SERVICES”</b> )
      </p>
      <br />
      <p>
        THESE TERMS OF SERVICE APPLY TO ALL USERS OF THE SERVICES, INCLUDING
        POSTERS, RENTERS, USERS WHO UPLOAD, DOWNLOAD, USE OR ACCESS CONTENT ON
        THE WEBSITE, Rently APP AND/OR THE USERS WHO SIMPLY VIEW THE CONTENT ON
        THE WEBSITE (COLLECTIVELY, <b>“USERS”</b> ).
      </p>
      <br />
      <p>
        BY VISITING THE WEBSITE, CREATING AN ACCOUNT THROUGH THE WEBSITE/APP OR
        OTHERWISE USING THE SERVICES, YOU ARE ACCEPTING THESE TERMS. IF YOU DO
        NOT ACCEPT THESE TERMS, THEN DO NOT USE THIS WEBSITE/APP OR ANY OF ITS
        CONTENT OR SERVICES. THESE TERMS MAY BE REVISED OR UPDATED BY US FROM
        TIME TO TIME AND WE WILL USE COMMERCIALLY REASONABLE EFFORTS TO PROVIDE
        USERS WITH ADVANCE NOTICE OF ANY CHANGES. IT IS YOUR RESPONSIBILITY TO
        REVIEW THESE TERMS FOR ANY CHANGES. YOUR USE AFTER ANY REVISIONS OR
        UPDATES OF THESE TERMS SHALL ACKNOWLEDGE YOUR ACCEPTANCE OF SUCH REVISED
        TERMS. ANY NEW FEATURES THAT MAY BE ADDED TO THE SERVICES FROM TIME TO
        TIME WILL BE SUBJECT TO THESE TERMS UNLESS STATED OTHERWISE. YOU SHOULD
        VISIT THIS PAGE PERIODICALLY TO REVIEW THESE TERMS.
      </p>
      <br />
      <h4>1-THE SERVICES</h4>
      <p>
        <b>1.1 Rently Services.</b> The Rently Platform allows Users to offer to
        rent out household items and other goods ( <b>“Items”</b> ) to other
        Users. Users who seek to rent out Items as <b>“Posters”</b> can create
        and publish on the Platform a listing in respect of the Item, which
        includes pricing (minimum rate, hourly, daily, weekly, monthly, event),
        pictures, description, availability type (quick check, manual, system),
        pickup location, delivery from location, as well as any rules or
        instructions Users seeking to rent an item from a Poster (“Renters”) can
        make requests to book the Items in accordance with the terms set by the
        Poster.
      </p>
      <br />
      <p>
        <b>1.2 Posting an Item.</b> When Posting an Item, a Poster shall include
        all relevant safety instructions or any relevant use information in
        respect of the Item. Rently reserves the right to inspect or verify the
        information provided in respect of any Item or listing. We may ask for a
        better quality picture or provide a better quality picture as we see
        fit.
      </p>
      <br />
      <p>
        {" "}
        <b>1.3 Booking an Item.</b> Renters can request to book Items made
        available by Posters by making a request to the Poster through the
        Platform and including the requested <b>“Booking Start Date”</b> and
        <b>“Booking Completion Date”</b> and paying the applicable fees (as set
        out in Section 4 below), including the rental fee charged by the Poster
        ( <b>“Rental Fee”</b> ). Once confirmed by the Poster, Rently with
        notifying Renter that the Booking is confirmed.
      </p>
      <p>
        <b>1.4 Delivery and Use of Item.</b> On the Booking Start Date, Posters
        and Renters are required to be at the agreed upon location to deliver
        the Item to the Renter. Renters are responsible and liable for the Item
        during the Booking and must treat the Item with care and respect. Renter
        will be liable to cover the costs of damage or replacement of any
        damages or loss of the Item during the Booking, as well as any damages
        associated with failing to return the Item on time. Upon return to the
        Poster at the agreed upon location. The poster will inspect the Item to
        ensure it is in the same condition that it was when it was delivered to
        Renter. After the inspection, a cleaning fee may be a result depending
        on the item and the Poster’s additional fees.
      </p>
      <br />
      <p>
        {" "}
        <b>1.5 Insurance.</b> Rently has insurance through a third-party insurer
        that covers eligible Items of Posters located in eligible jurisdictions.
        The details of the insurance policy are located at
      </p>
      <br />
      <p>
        A Poster may choose to opt out of the insurance coverage, provided that
        the Poster assumes all risk associated with renting its Item through the
        Platform. The cost of the insurance coverage is included in Rently’s
        standard service fees. However, Posters who opt out of the insurance may
        be eligible for a discount on the service fee.
      </p>
      <p>
        For covered Items, Rently will indemnify and hold harmless the Poster
        for any deductible to be paid in association with a valid claim under
        the insurance policy. In order to make a claim under the insurance, the
        Poster must submit a claim to Rently within 24 hours of the Booking
        ending and file a police report if requested by Rently.
      </p>
      <br />
      <p>
        IF POSTER OPTS OUT OF THE INSURANCE COVERAGE OR THE RENTAL IS NOT
        COVERED BY INSURANCE BASED ON THE LOCATION OF THE BOOKING OR CATEGORY OF
        ITEM (E.G. EXCLUDED ITEMS), POSTER AGREES THAT Rently SHALL HAVE NO
        LIABILITY TO POSTER IN THE EVENT OF ANY DAMAGE, LOSS, OR THEFT TO AN
        ITEM RENTED THROUGH THE PLATFORM.
      </p>
      <br />
      <p>
        In the event of any inconsistency between these Terms and the Insurance
        Policy, the terms of the Insurance Policy will prevail solely to the
        extent of any inconsistency.
      </p>
      <p>
        <b>1.6 Rental Agreements.</b> Once a Poster has accepted a request to
        book an Item from a Renter and the Booking is confirmed, the Posted and
        Renter will be required to execute a Rental Agreement in respect of the
        Booking. These Terms shall form part of the Rental Agreement.
      </p>
      <h4>2-REGISTRATION AND ACCOUNTS</h4>
      <p>
        <b>2.1 Registration.</b> In order to use Services as a Poster or Renter,
        you must register for an account (your <b>“Account”</b> ). You agree to
        (a) provide accurate, current and complete information as may be
        prompted by any registration forms ( <b>“Registration Data”</b> ); (b)
        maintain the security of your password, and (c) maintain and promptly
        update the Registration Data as necessary to ensure it is up to date.
      </p>
      <br />
      <p>
        {" "}
        <b>2.2 Eligibility.</b> Rently makes the Services available in certain
        cities, as stated on our Platform (“Eligible Locations”). In order to
        register for an Account, you must be located in an Eligible Location and
        you must be at least 18 years old. Rently reserves the right to amend
        its eligibility criteria at any time.
      </p>
      <br />
      <p>
        {" "}
        <b>2.3 Personal Information.</b> When registering with Rently and using
        the Services, you may be asked to provide certain personal information.
        Certain personal information that you upload will be available to other
        users to allow you to use the Services. All Personal Information will be
        collected, used and disclosed in accordance with our Privacy Policy,
        which can be viewed at http://www.Rently.com/en/privacy-policy.
      </p>
      <br />
      <p>
        {" "}
        <b>2.4 Organization Accounts.</b> If you register for an Account or use
        the Services on behalf of any organization, entity or third-party, you
        hereby represent and warrant that you have the authority to bind such
        entity and agree to these Terms on behalf of such entity.
      </p>
      <br />
      <p>
        <b>2.5 Billing Information.</b> Registered Users are required to provide
        valid credit card information, direct deposit information or other
        acceptable payment information to register (collectively known as{" "}
        <b>“Billing Information”</b> ), which will be provided to Rently’s
        third-party payment processor ( <b>“Payment Processor”</b> ) and used
        for payment of fees and payouts under these Terms and remittance of
        payment for Platform transactions. Users shall promptly advise Rently if
        their Billing Information changes due to loss, theft, cancellation,
        expiry, or otherwise, and Users shall be liable for any failure to pay
        fees caused by out-of-date Billing Information.
      </p>
      <h4>3-DISCLAIMERS</h4>
      <p>
        <b>3.1 Use of the Platform.</b> If you interact with the Rently Platform
        in any way or create an Account, you do so at your own risk and
        understanding of our Terms of Service. Rently is not and will not be
        responsible for any actions by another user, individual, business,
        association, entity, or group that may physically, financially,
        verbally, digitally harm or distress you in any way. We use commercially
        reasonable efforts to provide an honest, safe, and trustworthy community
        but cannot be responsible for the actions of third parties.
      </p>
      <br />
      <p>
        <b>3.2 Damage and Theft.</b> Unless expressly indicated otherwise,
        Rently will not be responsible or any damages, theft, or destruction of
        items booked through the Platform and any losses arising from the use of
        the Platform will not be compensated or reimbursed by Rently.
      </p>{" "}
      <br />
      <p>
        <b>3.3 Accuracy of Users and Listings.</b> We have no control over the
        conduct of our Users or the truth or accuracy of the information that
        Users post on Rently. We cannot guarantee the true identity of any
        individual. You are responsible for determining the identity and
        suitability of any person or entity you may contact through the
        Platform. We do not endorse any persons who use or register for our
        Services. However, Rently reserves the right (but is not obligated to)
        verify the identity of Users as well as the availability and fitness of
        Items listed for rent by Posters. Rently IS NOT RESPONSIBLE FOR ANY
        FALSE OR MISLEADING INFORMATION ON THE WEBSITE OR PLATFORM AND WILL NOT
        BE LIABLE FOR ANY DAMAGES WHATSOEVER RESULTING FROM YOUR USE OF THE
        PLATFORM OR INFORMATION PROVIDED ON THE PLATFORM.
      </p>
      <br />
      <p>
        <b>3.4 RENTAL EQUIPMENT.</b> USE OF ANY ITEMS RENTED THROUGH THE
        PLATFORM IS SOLELY AT YOUR OWN RISK. USERS ARE SOLELY RESPONSIBLE FOR
        ENSURING THAT THEY HAVE ADEQUATE KNOW-HOW, TRAINING, SKILLS AND
        ABILITIES TO USE ANY ITEM, INCLUDING OBTAINING AND REVIEWING
        MANUFACTURER INSTRUCTIONS AND SAFE HANDLING GUIDES. Rently WILL NOT BE
        LIABLE FOR ANY INJURIES, LOSSES, DAMAGES (INCLUDING DAMAGES TO
        INDIVIDUALS OR PERSONAL PROPERTY OR DEATH) ARISING FROM USE OF ANY ITEM.
      </p>
      <br />
      <h4>4-BOOKING FEES AND PAYMENT TERMS</h4>
      <p>
        {" "}
        <b>4.1 Fees.</b> There are no fees to register for the Rently Services.
        However, Rently charges fees for each transaction made through the
        Platform ( <b>“Transaction Fees”</b> ). In particular, Rently charges
        Posters a fee for each completed transaction, which fee is displayed to
        the Poster at the time that Poster lists his or her Item. Rently charges
        a Renters a processing fee for each item that has a deposit, which fee
        is displayed to the Renter at the time that Renter is at the checkout
        for a Booking. If you rent out an Item as a Poster or rent an Item as a
        Renter, you agree to pay all Transaction Fees described herein or
        otherwise quoted to you at the time of the transaction.
      </p>
      <br />
      <p>
        <b>4.2 Taxes.</b> Transaction Fees and any other fees for purchases made
        through the Platform are subject to applicable taxes which will be
        determined by Rently and added to the respective fees. Rently is not
        responsible for calculating, reporting, remitting and withholding any
        applicable federal, state, provincial, goods, services, value-added,
        municipal or other taxes associated with the Poster’s services rendered
        or income earned through the Platform ( <b>“Poster Taxes”</b> ). Posters
        are solely liable for calculating, reporting, remitting and withholding
        any taxes associated with Poster’s services rendered through the Rently
        Platform and agrees to indemnify and hold harmless Rently for any taxes
      </p>
      <br />
      <p>
        <b>4.3 Payments.</b> Rently uses a third-party service provider, Stripe,
        to process all payments through Platform. Users are not permitted to
        make payments outside the Platform in connection with transactions
        arising from the use of the Platform. By providing your Billing
        Information, you agree to allow Rently to capture payments for when you
        confirm a booking by paying 50% of the booking total or 100% of the
        booking total. Rently does have the ability to process additional
        charges for late fees or fees from a Dispute. Rently is not responsible
        for any fees that may or may not be applied to your Billing Information
        by your credit card provider or financial institution related to your
        use of the Services. Rently disclaims all liability in this regard.
      </p>
      <br />
      <p>
        <b>4.4 Booking Process.</b> In order for a Renter to confirm a Booking,
        the Renter must pay 50% of the total booking fees at the time of Booking
        ( <b>“Booking Deposit”</b> ). The remaining balance will automatically
        be charged to Renter’s Billing Information five (5) days before the
        Booking Start Date. The Booking Deposit and balance will be held by
        Rently for the duration of the Booking. If the Billing Information is
        denied or the payment otherwise fails, Rently will automatically attempt
        to re-process the payment until it is successful or the Booking is
        canceled. If the Booking Start Date is less than five (5) days away from
        the date that Renter requests to make the Booking, Renter will be
        required to pay 100% of the total Booking fees to confirm and reserve
        the Item(s). Both the Renter and the Poster agree to allow Rently hold
        the funds from the time of the first payment to the date that the
        Booking is marked as completed or a dispute has reached a resolution.
      </p>
      <br />
      <p>
        <b>4.5 Damage Deposit.</b> The poster may have the option to require
        Renter pay a damage deposit ( <b>“Damage Deposit”</b> ) which will be
        collected and held by Rently for the duration of the Booking. If Poster
        requires a Damage Deposit, this must be paid at the same time as the
        applicable Booking Fees. If the equipment is damaged, lost or stolen
        during the Booking, the Renter will immediately forfeit the Damage
        Deposit and Rently will pay Poster the amount of the Damage Deposit,
        provided that Poster submits an “Issue” on the Platform to Rently within
        24 hours of the Booking ending and files a police report if requested by
        Rently. The poster will not be entitled to any other compensation from
        Rently or Renter. In cases where a deposit is required both the Poster
        and the Renter pay an additional processing fee.
      </p>
      <br />
      <p>
        {" "}
        <b>4.6 Payment to Poster.</b> Rently will release the Rental Fees owed
        to the Poster (the total Booking Fees less the Rently Service Fee and
        any other applicable taxes and fees) at the time that the Booking is
        marked as Complete. Depending on the Poster’s bank, it may take a few
        business days for the funds to be deposited to Poster’s Billing
        Information.
      </p>
      <br />
      <p>
        {" "}
        <b>4.7 Issues.</b> If there is an “Issue” requested within 48 hours of
        the Booking Completion Date, the funds will not be released to the
        Poster until the Issue has reached a resolution. Rently has the right to
        determine, in its sole discretion, how to resolve an Issue, including:
      </p>
      <ul>
        <li>Issuing a refund to the Renter</li>
        <li>Requiring the Renter to pay for damages caused to an Item</li>
        <li>Suspending or terminating any User’s Account</li>
        <li>Requiring the Renter to pay the listed additional fees.</li>
      </ul>
      <br />
      <p>
        {" "}
        <b>4.8 Refunds.</b> Rently does not offer any refunds in respect of
        Transaction Fees. Some Poster’s may offer refunds in accordance with our
        Cancellation Policy available at
        http://www.Rently.com/en/cancellation-policy. Renters must review the
        Poster’s cancellation terms at the time of requesting a booking to
        determine the Poster’s cancellation policy.
      </p>
      <p>
        <b>4.9 Credit card chargebacks.</b> Renters are liable for all Booking
        Fees and are solely responsible for all reversed or charged back
        transactions, regardless of the reason for, or timing of, the reversal
        or chargeback. A chargeback is usually issued when a customer disputes a
        charge that appears on their credit card statement. A chargeback may
        result in the reversal of a transaction. When a chargeback is issued,
        Renter is immediately liable to Rently for the full amount of payment of
        the chargeback plus any associated fees, fines, expenses or penalties.
        You agree that we may recover these amounts by means of any Billing
        Information or another bank account you have provided to Rently or by
        way of set-off of any amounts owed by Rently to you. If we are unable to
        recover funds related to a Chargeback for which you are liable, you will
        pay us the full amount of the chargeback immediately upon demand. You
        agree to pay all costs and expenses, including without limitation
        attorneys’ fees and other legal expenses, incurred by or on behalf of us
        in connection with the collection of any unpaid chargebacks unpaid by
        you.
      </p>
      <br />
      <p>
        <b>4.10 Late Fees.</b> In the event that an item is not returned on the
        booking’s end date and time, the renter will be charged 3x the daily
        rate of the item for each day it is not returned. If the item is not
        returned within 4 days it will be escalated to the appropriate
        authorities and with a description of your personal information.{" "}
      </p>
      <br />
      <h4>5-LICENSE INTELLECTUAL PROPERTY</h4>
      <p>
        <b> 5.1 License.</b> Subject to your compliance with these Terms and
        your payment of any fees owed hereunder, Rently grants you a
        non-transferable, non-exclusive, license to (a) access and use the
        Website, Platform, and the Services, and (b) download, install and use
        one copy of the App, if available, on a mobile device that you own or
        control for your use (the “License”). The App is licensed to you and not
        sold. Except as explicitly provided herein, nothing in the Terms gives
        you a right to use the Rently names, trademarks, logos or other
        distinctive brand features without our prior written consent.
      </p>
      <br />
      <p>
        {" "}
        <b>5.2 Reservation of Rights.</b> The Services and all materials therein
        or transferred thereby, including, without limitation, software, images,
        text, graphics, illustrations, logos, patents, trademarks, service
        marks, copyrights, photographs, audio, videos, and music (the{" "}
        <b>“Rently Content”</b> ), and all intellectual property rights related
        thereto, are the exclusive property of Rently and its licensors. Use of
        the Rently Content for any purpose not expressly permitted by this
        Agreement is strictly prohibited.
      </p>
      <br />
      <p>
        <b> 5.3 Feedback.</b> You may choose to or we may invite you to submit
        comments or ideas about the Website, App, and Services, including but
        not limited to, about how to improve the Services or our products ({" "}
        <b>“Feedback”</b> ). By submitting any Feedback, you agree that your
        disclosure is gratuitous, unsolicited and without restriction and will
        not place Rently under any fiduciary or other obligation, and that we
        are free to use the Feedback without any compensation to you and free to
        disclose the Feedback on a non-confidential basis or on any other basis,
        to anyone
      </p>
      <br />
      <p>
        <b>5.4 User Content.</b> Rently does not claim ownership of the data,
        materials and/or content created, uploaded or otherwise transmitted by
        you through use of the Rently Website, App or Service, including but not
        limited Item descriptions, photos, graphics, designs, drawings,
        electronic documents and comments ( <b>“User Content”</b> ). However, by
        using the Website, App and/or Services, you grant Rently a worldwide,
        royalty-free, non-exclusive license to collect, use, reproduce, store,
        display and sublicense such User Content for the purpose of operating
        the Website, App and Services.
      </p>
      <br />
      <p>
        {" "}
        <b>
          5.5 Notice and Procedure for Making Claims of Copyright Infringement.
        </b>{" "}
        Users are strictly prohibited from using the Platform and Services to
        infringe the intellectual property rights of others. If you believe your
        copyright has been infringed, please provide Rently with the following
        information and Rently will forward your notice to the User:
      </p>
      <ul>
        <li>claimant’s name and address</li>
        <li>
          identify the copyright material that is alleged to have been infringed
          and the claimant’s interest or right with respect to that material
        </li>
        <li>
          specify the location data (e.g. the web address or Internet address
          associated with the alleged infringement
        </li>
        <li>specify the infringement that is alleged</li>
        <li>specify the date and time of the alleged infringement</li>
      </ul>
      <br />
      <p>
        Notices must be sent to <b>rentlyservice@gmail.com</b> Rently has an
        obligation under Canadian copyright law to forward any notice that
        complies with Copyright Act.
      </p>
      <h4>6-LICENSE RESTRICTIONS</h4>
      <p>
        Rently may impose certain limitations on the use of the Website, App or
        Services, including, but not limited to restricting the number of
        accounts for which you may register, and/or imposing charges for certain
        features of the Services. You agree to use the Rently Website and the
        Services only for purposes as permitted by these Terms. Rently reserves
        the right to modify or impose any limitations on the use of the Rently
        Website, App and the Services at any time, with or without notice to
        you. We also reserve the right at all times to terminate any use of the
        Rently Platform at any time without any liability whatsoever. In using
        the Rently Website and/or the Services you shall not:
      </p>
      <br />
      <p>
        (a) intentionally or unintentionally violate any of these Terms, or any
        local, state, provincial, national or international law or regulation,
        including without limitation using the capabilities of the Services to
        transmit any unlawful content, to harass or intimidate others, to spam
        third parties or to impersonate anyone
      </p>
      <p>
        (b) license, sell, rent, lease, transfer, assign or otherwise
        commercially exploit the Rently Website, App or the Services
      </p>
      <br />
      <p>
        (c) upload, post, email, transmit or otherwise make available any
        material that:
      </p>
      <ul>
        <li>
          is unlawful, harmful, threatening, abusive, harassing, tortious,
          defamatory, vulgar, obscene, pornographic, libelous, invasive of
          another’s privacy, hateful, or racially or ethnically objectionable,
          encourages criminal behavior, gives rise to civil liability, violates
          any law, or is otherwise objectionable
        </li>
        <li>
          you do not have a right to make available under any law or under a
          contractual relationship
        </li>
        <li>
          infringes any patent, trademark, trade secret, copyright or other
          proprietary rights of any party (including privacy rights)
        </li>
        <li>
          is or contains unsolicited or unauthorized advertising, solicitations
          for business, promotional materials, “junk mail,” “spam,” “chain
          letters,” “pyramid schemes,” or any other form of solicitation
        </li>
        <li>
          contains software viruses or any other computer code, files or
          programs designed to interrupt, destroy or limit the functionality of
          any computer software or hardware or telecommunications equipment or
          data or the Website or that of any Users or viewers of the Website or
          that compromises a User’s privacy
        </li>
        <li>
          contains any falsehoods or misrepresentations or create an impression
          that you know is incorrect, misleading, or deceptive or any material
          that could damage or harm minors in any way.
        </li>
      </ul>
      <br />
      <p>
        (d) or modify, translate, make derivative works of, disassemble,
        decompile, reverse compile or reverse engineer any part of the Rently
        Website, App or any software provided by us
      </p>
      <br />
      <p>
        (e) use our Services to transmit, distribute, post or submit any
        information concerning any other person or entity, including without
        limitation, photographs of others without their permission, personal
        contact information or credit, debit, calling card or account numbers
      </p>
      <br />
      <p>
        (f) use automated scripts to collect information or otherwise interact
        with the Services or the Website
      </p>
      <br />
      <p>
        (g) advocate, encourage or assist any third party in doing any of the
        foregoing.
      </p>
      <h4>7-USER CONDUCT</h4>
      <p>
        <b>7.1 All Users.</b> In using the Services as a Poster or Renter, you
        agree to comply with all Booking procedures and use best efforts to
        provide an enjoyable and safe experience for other Users. Moreover, you
        agree that you will not:
      </p>
      <ol>
        <li>create any false Issue requests</li>
        <li>
          Publish any false or inaccurate review or representation of another
          User or another User’s Item
        </li>
        <li>
          Create more than two Rently Accounts for yourself or on behalf of
          another person or business
        </li>
        <li>
          Create a posting for an Item that is not in your possession or that
          you do not have permission to rent
        </li>
        <li>
          Allow a Booking of an item that is already confirmed by another User
          (double booking the Item)
        </li>
        <li>
          Solicit users to join a third-party service that may or may not be a
          competitor of Rently
        </li>
        <li>
          Post an Item with information that is false or misleading, including
          in the picture, description, condition rating, or pricing
        </li>
        <li>
          Intentionally or unintentionally cause harm or damage to another
          User’s Item, steal an Item, use any Item for a purpose that is not the
          Item’s primary purpose or use an Item to commit any crime or otherwise
          break any applicable law
        </li>
        <li>
          Use or promote the Rently platform to promote any illegal or violent
          activities
        </li>
        <li>
          Discriminate against any other User, including refusing to interact
          with another user solely based on race, gender, sexual orientation,
          nationality, culture, and/or religion
        </li>
        <li>
          Use the Rently platform in any way to harm, disrespect, or bully
          another User
        </li>
        <li>
          Attempt to intentionally cause a poor experience for another User
        </li>
        <li>
          Attempt to blackmail or extort another User for a personal gain or for
          the User’s downfall
        </li>
        <li>
          “stalk” or harass any other User or collect or store any information
          about any other User other than for purposes of transacting with one
          another
        </li>
        <li>
          impersonate any person or entity or falsify or otherwise misrepresent
          yourself or your affiliation with any person or entity.
        </li>
      </ol>
      <br />
      <p>
        {" "}
        <h4>7.2 Renter Rules.</h4> Renters further agree to the following
        conditions in respect of any Booking:
      </p>
      <br />
      <ol>
        <li>
          Renter shall not sub-lease or otherwise rent the Item to any
          third-party during a Booking
        </li>
        <li>Renter shall not use the Item for any illegal activities</li>
        <li>
          Renter shall use all reasonable efforts to ensure the Item is not
          damaged, lost or stolen during the Booking
        </li>
        <li>
          Renter will be liable for any additional costs incurred by the Renter
          while using the Item, including but not limited to those communicated
          to Renter at the time the Booking.
        </li>
      </ol>
      <h5>
        RENTERS REMAIN SOLELY LIABLE FOR ANY DAMAGE, LOSS, OR THEFT TO THE ITEM
        DURING THE BOOKING, INCLUDING PAY FOR ANY REPAIRS OR REPLACEMENT COSTS.
        RENTER AGREES TO INDEMNIFY AND HOLD HARMLESS Rently AND THE POSTER FOR
        ANY DAMAGES TO RENTED ITEMS, THIRD PARTY PROPERTY, AS WELL AS INJURIES
        OR DEATH ARISING FROM RENTER’S RENTAL AND USE OF THE ITEM. RENTERS ARE
        NOT COVERED AS ADDITIONAL INSURED UNDER Rently’S INSURANCE POLICY.
      </h5>
      <br />
      <h4>8-INDEMNITY</h4>
      <br />
      <p>
        You agree to defend, indemnify and hold Rently, its affiliates,
        subsidiaries, directors, officers, employees, agents, partners and
        licensors harmless from any claim or demand, including reasonable legal
        fees, made by a third party, relating to or arising from: (a) any
        content you create, submit, post, transmit, or otherwise make available
        through the Website, App or Services; (b) your use of the Website, App
        or Services; (c) any dealings between you and any persons to whom you
        send or otherwise transmit links or any content to using the Service,
        including without limitation claims relating to misrepresentation; (d)
        any violation by you of these Terms; (e) your violation of any rights of
        another; or (f) your violation of any contract you enter into with
        another User of the Service. This obligation shall survive the
        termination or expiration of these Terms and/or your use of the
        Services.
      </p>
      <h4>9-TERM TERMINATION</h4>
      <p>
        {" "}
        <b>9.1 Termination by Rently.</b> Rently may, at any time and for any
        reason or no reason, without prior notice, immediately suspend all or a
        portion of your Account and/or access to the Website, App or Services.
        Cause for such termination shall include, but not be limited to: (a)
        violations of the Terms, or any other policies or guidelines that are
        referenced herein and/or posted on the Website, App or through the
        Services; (b) discontinuance or material modification to the Services or
        any part thereof; (c) a request and/or order from law enforcement, a
        judicial body, or other government agency; (d) where provision of the
        Rently Website, App or the Services to you is or may become unlawful;
        (e) unexpected technical or security issues or problems; or (f) your
        participation in fraudulent or illegal activities. Any such termination
        or suspension shall be made by Rently in its sole discretion, and Rently
        will not be responsible to you or any third party for any damages that
        may result or arise out of such termination or suspension of your
        Account and/or access to the Services.
      </p>
      <br />
      <p>
        {" "}
        <b>9.2 Closing of Account by User.</b> At any time a User may terminate
        an Account, provided that all amounts owed to other Users and Rently
        have been paid.
      </p>
      <h4>10-THIRD-PARTY CONTENT</h4>
      <br />
      <p>
        {" "}
        <b>10.1 Advertisements.</b> You acknowledge and agree that the Website
        and Platform may contain advertisements from both other Users and from
        other third parties. If you elect to have any business dealings with
        anyone whose products or services may be advertised on the Website, you
        acknowledge and agree that such dealings are solely between you and such
        third party and you further acknowledge and agree that Rently shall not
        have any responsibility or liability for any losses or damages that you
        may incur as a result of any such dealings.
      </p>
      <br />
      <p>
        {" "}
        <b>10.2 Links.</b> The Website and App may contain links to other
        websites that are not owned or controlled by Rently. In no event shall
        any reference to any third party, advertisement, third-party product or
        service be construed as an approval or endorsement by Rently of that
        third party, third-party product or service. Rently is not responsible
        for the content of any linked websites. Any third-party websites or
        services accessed from the Website or App are subject to the terms and
        conditions of those websites and or services and you are responsible for
        determining those terms and conditions and complying with them. The
        presence on the Website or App of a link to any other website(s) or any
        advertisements does not imply that Rently endorses or accepts any
        responsibility for the content or use of such websites, and you hereby
        release Rently from all liability and/damages that may arise from your
        use of such websites or receipt of services from any such websites.
      </p>
      <br />
      <p>
        {" "}
        <b>10.3 Service Providers.</b> Rently uses third-party integrations to
        make available the Platform and Services. We cannot control how third
        parties conduct their business or what happens to their business or
        network. We cannot and will not be responsible or liable for any
        breaches or outages to their network, software, or any technology that
        they use in connection with Rently.
      </p>
      <br />
      <h4>11-SERVICE AVAILABILITY</h4>
      <br />
      <p>
        Rently does not guarantee that the Service or any particular
        functionality will be available to Users at all times. Rently reserves
        the right to alter, suspend, or discontinue the Website, Platform or
        Services any time we see necessary without any formal notice. The
        Platform may be unresponsive for maintenance and security updates or
        changes. To optimize your User experience, we advise you to always have
        the most up to date version of the Application. Using an older version
        may cause you to have a poor experience because it is not supported by
        new features or new technology implemented in the Platform. Rently will
        not be reasonable for any cellular data overages on your smartphone or
        tablet.
      </p>
      <br />
      <h4>12-DISCLAIMER OF WARRANTIES AND CONDITIONS</h4>
      <br />
      <p>
        THE WEBSITE, PLATFORM, SERVICES, AND APP ARE PROVIDED “AS IS” AND ON AN
        “AS AVAILABLE” BASIS. Rently SPECIFICALLY DISCLAIMS ALL REPRESENTATIONS,
        WARRANTIES, AND CONDITIONS OF ANY KIND RELATING TO THE Rently WEBSITE,
        APP AND THE SERVICES, INCLUDING BUT NOT LIMITED TO ANY IMPLIED
        WARRANTIES OR CONDITIONS OF MERCHANTABILITY OR MERCHANTABLE QUALITY,
        SATISFACTORY QUALITY OR FITNESS FOR A PARTICULAR PURPOSE.
      </p>
      <br />
      <p>
        ANY MATERIAL TRANSMITTED, STORED, ACCESSED OR OTHERWISE MAINTAINED
        THROUGH THE USE OF THE SERVICES IS DONE SO AT YOUR OWN DISCRETION AND
        RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE
        OR LOSS OR CORRUPTION OF DATA THAT RESULTS FROM ANY SUCH USE OF THE
        WEBSITE, APP OR SERVICES. NO ADVICE OR INFORMATION, WHETHER ORAL OR
        WRITTEN, OBTAINED BY YOU FROM Rently OR THROUGH OR FROM THE SERVICES
        SHALL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY STATED IN THESE
        TERMS.
      </p>
      <h4>13-LIMITATION OF LIABILITY</h4>
      <br />
      <p>
        UNDER NO CIRCUMSTANCES SHALL Rently BE LIABLE FOR ANY SPECIAL,
        INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING,
        WITHOUT LIMITATION, ANY DAMAGES THAT RESULT FROM (A) YOUR USE OF OR YOUR
        INABILITY TO USE THE Rently WEBSITE, APP OR THE SERVICES, (B) THE COST
        OF PROCUREMENT OF SUBSTITUTE GOODS, DATA, INFORMATION OR SERVICES, (C)
        ERRORS, MISTAKES, OR INACCURACIES IN ANY INFORMATION AVAILABLE ON THE
        WEBSITE OR PLATFORM, (D) PERSONAL INJURY OR PROPERTY DAMAGE OF ANY KIND
        WHATSOEVER ARISING FROM OR RELATING TO YOUR USE OF THE SERVICES, ANY
        BUGS, VIRUSES OR OTHER FILES OR DATA THAT MAY BE HARMFUL TO COMPUTER OR
        COMMUNICATION EQUIPMENT OR DATA THAT MAY HAVE BEEN TRANSMITTED TO OR
        THROUGH THE Rently WEBSITE, OR (E) ANY DEALINGS OR TRANSACTIONS BETWEEN
        YOU AND ANY PERSONS OR USERS TO WHOM YOU SEND OR TRANSMIT ANY CONTENT
        USING THE SERVICES, INCLUDING WITHOUT LIMITATION ANY PRODUCTS OR
        SERVICES OFFERED BY YOU TO SUCH PERSONS.
      </p>
      <br />
      <p>
        NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, Rently’S
        LIABILITY TO YOU FOR ANY DAMAGES ARISING FROM OR RELATED TO THIS
        AGREEMENT (FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE
        ACTION), WILL AT ALL TIMES BE LIMITED TO THE GREATER OF (A) FIVE HUNDRED
        CANADIAN DOLLARS ($500) OR (B) AMOUNTS YOU’VE PAID Rently IN THE 6
        MONTHS PRIOR TO THE EVENT GIVING RISE TO THE CLAIM (IF ANY). THE
        FOREGOING LIMITATIONS SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY
        APPLICABLE LAW.
      </p>
      <br />
      <p>
        SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY
        FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, AS SUCH, TO THE EXTENT SUCH
        EXCLUSIONS OR LIMITATIONS ARE SPECIFICALLY PROHIBITED BY LAW, SOME OF
        THE EXCLUSIONS OR LIMITATIONS SET FORTH BELOW MAY NOT APPLY TO YOU.
      </p>
      <br />
      <h4>14-GOVERNING LAW JURISDICTION</h4>
      <br />
      <p>
        {" "}
        <b>14.1 Governing Law.</b> This Agreement shall be governed by the laws
        in effect in the Province of Ontario, Canada. No choice of laws rules of
        any jurisdiction shall apply to this Agreement. The courts of the
        Province of Ontario located in Ottawa shall have jurisdiction over any
        legal action or proceeding arising out of or relating to these Terms,
        the Rently Website or the Services and you consent to the jurisdiction
        of such courts for any such action or proceeding. You waive all rights
        that you may have or that may hereafter arise to contest such
        jurisdiction of such courts. The parties waive any right to a jury trial
        with respect to any action brought in connection herewith. The
        application of the United Nations Convention on Contracts for the
        International Sale of Goods to this Agreement is expressly excluded.
      </p>
      <br />
      <p>
        {" "}
        <b>14.2 Legal Fees.</b> In the event that you and Rently or you and
        another user end up in a legal dispute that goes to court, you agree
        that the unsuccessful party to the dispute shall be responsible for
        paying all of the other party’s legal fees.
      </p>
      <h4>15-ENTIRE AGREEMENT</h4>
      <br />
      <p>
        These Terms, together with the Privacy Policy and any Rently policies
        made available on our website, constitute the entire agreement governing
        the use of the Rently Website, App and the Services and all related
        activities. We reserve the right to modify or change the Rently Website,
        App and the Services at any time without notice or liability to you. If
        any part of these Terms is held to be unlawful, void, or unenforceable,
        that part shall be deemed severed and shall not affect the validity and
        enforceability of the remaining provisions. Our failure to exercise or
        enforce any right or provision under these Terms shall not constitute a
        waiver of such right or provision. You may not assign any part of these
        Terms or any rights or licenses granted hereunder, whether voluntarily,
        by operation of law, or otherwise without our prior written consent.
        Rently may assign these Terms for any reason without notice to you.
      </p>
      <br />
      <h4>16-ENGLISH LANGUAGE</h4>
      <br />
      <p>
        It is the express wish of the parties that this agreement and all
        related documents be drawn up in English. C’est la volonté expresse des
        parties que la présente convention ainsi que les documents qui s’y
        rattachent soient rédigés en anglais.
      </p>
      <h4>17-CONTACT US</h4>
      <br />
      <p>
        If you have any questions about these Terms or if you wish to receive
        any additional information, provide feedback or raise any concerns in
        relation to the Rently Website, App or the Services, please contact us
        at: rentlyservice@gmail.com
      </p>
      <br />
      <p>Last Modified: [June 23, 2021]</p>
    </div>
  );
}
