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

export default function PrivacyPolicy() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <h1>Privacy Policy</h1>
      <h3>
        <b>Rently Privacy Policy</b>
      </h3>
      <p>
        Rently Inc. ( <b>“Rently”</b> , <b>“We”</b> , <b>“Us”</b> ) has created
        this privacy policy ( <b>“Privacy Policy”</b> ) in order to set out how
        we collect, use, and disclose personal information through the Rently
        Website located at (the <b>“Website”</b> ), the Rently application and
        software platform (the <b>“Platform”</b> ) and in the course of
        providing our rental listing and booking services as more particularly
        described in our Terms of Service (collectively, the <b>“Services”</b>{" "}
        ), which are available at: Any capitalized terms used in this Privacy
        Policy and not otherwise defined shall have the meaning ascribed to them
        in the Terms of Service.
      </p>
      <br />
      <p>
        The privacy of our users is of great importance to us. By visiting our
        Website or using the Platform or Services in any manner, you acknowledge
        that you accept the practices and policies outlined in this Privacy
        Policy and you hereby consent to the collection, use, and disclosure of
        your personal information in accordance with this Privacy Policy.
      </p>
      <br />
      <li>WHAT DOES THIS PRIVACY POLICY COVER?</li>
      <br />
      <p>
        This Privacy Policy covers our collection, use, and disclosure of
        information about identifiable individuals ({" "}
        <b>“Personal Information”</b> ), including those who visit our Website
        and use our Services (“Users”). This Privacy Policy does not apply to
        the practices of companies that we do not own or control, including
        practices of other Users who use our Services.
      </p>
      <br />
      <h3>
        <li>COLLECTION AND USE OF PERSONAL INFORMATION</li>
      </h3>
      <br />
      <li>Account Information </li>
      <br />
      <p>
        In order to use certain listing Services, Users must have a valid Rently
        Account to log into the Platform (“Account”). When you register for an
        Account, Rently may collect the following information:
      </p>
      <li>First and last names</li>
      <li>Address</li>
      <li>Phone number</li>
      <li>Email address</li>
      <li>Profile picture</li>
      <li>Age/ Date of Birth</li>
      <li>Credit card and/or billing information</li>
      <li>Social media account login.</li>
      <br />
      <p>
        This Personal Information is collected to allow us to administer your
        Account and provide you with the Services. In particular, We collect the
        above information for the following purposes:
      </p>
      <li>
        Verify your identity when you create an Account on our Platform,
        including through third-party provider Facebook and Google (if you
        choose to sign in using a third-party service)
      </li>
      <li>To create personalized content for you</li>
      <li>
        To communicate with you regarding your engagement with our Platform
      </li>
      <li>
        To send promotional or marketing content (in accordance with applicable
        anti-spam laws)
      </li>
      <li>
        For billing purposes so that you can make purchases and receive payment
        through the Services
      </li>
      <li>
        To allow you to interact with other community members as part of the
        Services.
      </li>
      <br />
      <h3>
        <li>Transaction and Services Usage Data</li>
      </h3>
      <br />
      <p>
        Rently collects and stores information related to your use of the
        Services and transactions completed on the Services (“User History”),
        some of which information may be considered Personal Information. In
        particular, Rently keeps track of:
      </p>
      <br />
      <li>Items that you list or book</li>
      <li>Item pricing</li>
      <li>Availability or Items</li>
      <li>Photos of Items</li>
      <li>Locations where Items are picked up or delivered for a Booking</li>
      <li>Your location</li>
      <li>Booking dates</li>
      <li>Bank Account Information</li>
      <li>
        Amounts paid and received in respect of transactions on the Platform
      </li>
      <li>Reviews of other Users and Items</li>
      <li>Messages exchanged with other Users in the Platform.</li>
      <br />
      <p>
        We collect and store User History to allow Users to keep track of
        transactions and other activities on the Platform, resolve User
        disputes, and create aggregated and anonymised statistical data about
        how Users interact with the Services. In particular, We use User History
        to:
      </p>
      <br />
      <li>To help us improve our Platform</li>
      <li>To provide User and Item reviews to other Users</li>
      <li>To create reports based on User engagement with the Platform</li>
      <li>To calculate the most used areas of our Platform</li>
      <li>
        To analyze trends regarding User location and types of Items being
        offered and rented
      </li>
      <li>
        To monitor Platform usage to prevent and address violations, fraud, or
        illegal activities
      </li>
      <br />
      <p>
        Rently may also collect certain information from users of the Website
        and Services, such as Internet addresses, time spent logged into the
        Services, type of device you are using, operating system and other usage
        data (“Usage Data”). This Usage Data is logged to help diagnose
        technical problems, and to administer our Website and Services in order
        to constantly improve the quality of the Services.
      </p>
      <br />
      <h3>
        <li>Minors</li>
      </h3>
      <br />
      <p>
        A User is required to have a valid credit card associated with their
        Account before posting or Booking an Item. The Platform is not intended
        for anyone under the age of eighteen (18) years old and we do not
        knowingly allow anyone under the age of 18 to use the Platform. If an
        underage person does wish to engage with our Platform, he or she must
        have consent from a parent or guardian. If you become aware of an
        underage User that has created an Account on the Platform or otherwise
        is attempting to use the Services without the permission or consent of a
        parent or guardian, please email us at the contact information below.
      </p>
      <br />
      <h3>
        <li>Cookies</li>
      </h3>
      <br />
      <p>
        Technologies such as cookies, beacons, scripts, and tags are used by us
        and our third-party partners. These technologies are used in analyzing
        trends, administering the website, tracking users’ movements around the
        website, and gathering demographic information about our user base as a
        whole. We may receive reports based on the use of these technologies by
        these companies on an individual and aggregated basis. Various browsers
        may offer their own management tools for removing these types of
        tracking technologies.
      </p>
      <br />
      <p>
        Standing alone, cookies do not identify you personally. They merely
        recognize your browser. Cookies come in two types: session and
        persistent-based. Session cookies exist only during an online session.
        They disappear from your computer when you close your browser software
        or turn off your computer. Persistent cookies remain on your computer
        after you’ve closed your browser or turned off your computer.
      </p>
      <br />
      <p>
        Rently uses session cookies containing encrypted information to allow
        the system to uniquely identify you while you are logged in. This
        information allows Rently to process online transactions and requests.
        Session cookies help us make sure you are who you say you are after
        you’ve logged in and are required in order to use the Service.
      </p>
      <br />
      <p>
        Rently uses persistent cookies that only Rently can read and use, to
        identify the fact that you are a Rently user. We are especially careful
        about the security and confidentiality of the information stored in
        persistent cookies. Users who disable their web browser’s ability to
        accept cookies will be able to browse our Website but may not be able to
        use all the features of our Services.
      </p>
      <br />
      <h4>
        <li>Background Location Services</li>
      </h4>
      <br />
      <p>
        We use Background Location Services to allow our RentlyExpress Tracker
        feature to display your current location on a map to other Rently
        community members you are interacting with, while you are in the process
        of dropping off or picking up an item. Background Location Services are
        not used when the RentlyExpress Tracker is not in use, and the
        information it collects when in use is not stored nor used for any other
        purposes.
      </p>
      <h3>
        <li>SECURITY AND STORAGE</li>
      </h3>
      <h4>3.1 Storage Location</h4>
      <br />
      <p>
        Rently stores its data, including Personal Information, on servers
        located in Canada and the United States. By submitting any Personal
        Information or using the Services, you agree to this transfer, storing
        or processing of your Personal Information in Canada and the U.S. You
        acknowledge and agree that your Personal Information may be accessible
        to law enforcement and governmental agencies in those countries under
        lawful access regimes or court order.{" "}
        <b> Information is stored using Amazon Web Services servers</b> .
      </p>
      <br />
      <h3>3.2 Security</h3> <br />
      <p>
        The security of your Personal Information is important to us. We use
        commercially reasonable efforts to store and maintain your Personal
        Information in a secure environment. We take technical, contractual,
        administrative, and physical security steps designed to protect Personal
        Information that you provide to us. We have implemented procedures
        designed to limit the dissemination of your Personal Information to only
        such designated staff as are reasonably necessary to carry out the
        stated purposes we have communicated to you.
      </p>
      <br />
      <p>
        You are also responsible for helping to protect the security of your
        Personal Information. For instance, never give out your Account
        information or password for the Services to third parties.
      </p>
      <br />
      <li>
        <h3>DISCLOSURE OF PERSONAL INFORMATION WITH THIRD PARTIES</h3>
      </li>
      <br />
      <li>
        <h4>Disclosure of Personal Information</h4>
      </li>
      <br />
      <p>
        Certain Personal Information that you upload to your public profile will
        be made available to other users on the Platform in order to allow you
        to transact with other Users and use the Services, including your first
        name, profile picture, and general location. When you transact with
        another User, they may be provided with additional information such as
        your exact location and contact information.
      </p>
      <br />
      <p>
        When a User creates a posting on the Platform for an Item, all of the
        information provided is shared on the Platform, including Item name and
        description, picture, pricing, availability, as well as the Poster’s
        profile picture, first name, general location of the Item, link to the
        User’s profile, Item reviews, and any other additional information that
        the Poster submits to the posting.
      </p>
      <br />
      <p>
        Except as set out in this Privacy Policy, Rently will not disclose your
        Personal Information without your express written consent, unless
        otherwise permitted or required by law.
      </p>
      <br />
      <h3>
        <li>Disclosure of Statistical Data</li>
      </h3>
      <br />
      <p>
        Rently may disclose aggregate statistical data to its business partners,
        who may use the data for business purposes. This information does not
        include any Personal Information or otherwise identify any individual
        Customers.
      </p>
      <h3>
        <li>Service Providers and Business Partners</li>
      </h3>
      <br />
      <p>
        We may from time to time employ other companies and people to perform
        tasks on our behalf and need to share Personal Information with them to
        provide the Services. Unless we tell you differently, such third parties
        do not have any right to use the Personal Information we share with them
        beyond what is necessary to assist us. This includes third party
        companies and individuals employed by us to facilitate our products and
        services, including the provision of maintenance services, database
        management, customer relationship management, payment processing, web
        analytics and general improvement of the Services, and businesses who
        engage our Services (to the extent provided for above). We will limit
        the Personal Information shared with service providers to that which is
        necessary to make available and maintain the Services.
      </p>
      <br />
      <h3>
        <li>Business Transfers</li>
      </h3>
      <br />
      <p>
        If we (or substantially all of our assets) are acquired, or if we go out
        of business, enter bankruptcy, or go through some other change of
        control, Personal Information may be made available or otherwise
        transferred to the new controlling entity, where permitted under
        applicable law.
      </p>
      <br />
      <h3>
        <li>With Your Consent</li>
      </h3>
      <br />
      <p>
        If we need to use or disclose any Personal Information in a way not
        identified in this Privacy Policy, we will notify you and/or obtain your
        express consent as required under applicable privacy laws.
      </p>
      <br />
      <h3>
        <li>Disclosure Under Applicable Law</li>
      </h3>
      <br />
      <p>
        Rently may disclose Personal Information in limited circumstances where
        required or permitted under applicable laws, including:
      </p>
      <br />
      <li>
        To another organization for the purposes of detecting or suppressing
        fraud
      </li>
      <li>
        As necessary or appropriate, with our attorneys, accountants, auditors
        or other advisors
      </li>
      <li>
        As required by law, such as to comply with a subpoena or other legal
        process, or to comply with government reporting obligations
      </li>
      <li>
        When we believe in good faith that disclosure is necessary (a) to
        protect our rights, the integrity of the Platform, or your safety or the
        safety of other members, or (b) to detect, prevent, or respond to theft
        or fraud, violations of law or our policies or Terms of Service, or
        other misuse of the Platform.
      </li>
      <br />
      <h3>
        <li>RETENTION</li>
      </h3>
      <br />
      <p>
        We will keep your Personal Information for as long as it remains
        necessary for the identified purpose or as required by law, which may
        extend beyond the termination of our relationship with you. We may
        retain certain data as necessary to prevent fraud or future abuse, or
        for legitimate business purposes, such as analysis of aggregated,
        non-personally-identifiable data, account recovery, or if required by
        law. All retained Personal Information will remain subject to the terms
        of this Privacy Policy.
      </p>
      <br />
      <h3>
        <li>ACCESS, CORRECTION, AND ACCURACY </li>
      </h3>
      <br />
      <p>
        You have the right to access the Personal Information we hold about you
        in order to verify the Personal Information we have collected in respect
        to you and to have a general account of our uses of that information.
        Upon receipt of your written request, we will provide you with a copy of
        your Personal Information, although in certain limited circumstances,
        and as permitted under law, we may not be able to make all relevant
        information available to you, such as where that information also
        pertains to another user. In such circumstances, we will provide reasons
        for the denial to you upon request. We will endeavor to deal with all
        requests for access and modifications in a timely manner.
      </p>
      <br />
      <p>
        We will make every reasonable effort to keep your Personal Information
        accurate and up to date, and we will provide you with mechanisms to
        update, correct, delete or add to your Personal Information as
        appropriate. As appropriate, this amended Personal Information will be
        transmitted to those parties to which we are permitted to disclose your
        information. Having accurate Personal Information about you enables us
        to give you the best possible service.
      </p>
      <br />
      <h3>
        <li>CHANGES TO THIS PRIVACY POLICY</li>
      </h3>
      <br />
      <p>
        We may amend this Privacy Policy from time to time. Use of Personal
        Information we collect is subject to the Privacy Policy in effect at the
        time such information is collected, used or disclosed. If we make
        material changes or changes in the way we use Personal Information, we
        will notify you by posting an announcement on our Website or sending you
        an email prior to the change becoming effective. You are bound by any
        changes to the Privacy Policy when you use the Website after such
        changes have been first posted.
      </p>
      <br />
      <h3>
        <li>ADDITIONAL INFORMATION</li>
      </h3>
      <br />
      <p>
        You can help by keeping us informed of any changes such as a change of
        address or telephone number. If you would like to access your Personal
        Information, if you have any questions, comments or suggestions about
        our Privacy Policy or practices, or if you find any errors in our
        Personal Information about you, please contact us at
        rentlyservice@gmail.com.
      </p>
      <br />
      <p>Last Updated: March 24th, 2021</p>
    </div>
  );
}
