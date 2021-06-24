import {
  section,
  container,
  cardTitle,
  coloredShadow,
  mlAuto,
  mrAuto,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

import customCheckboxRadioSwitch from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";

const styles = {
  ...customCheckboxRadioSwitch,
  ...tooltipsStyle,
  checkRoot: {
    padding: "0px",
    "&:hover": {
      backgroundColor: "unset !important",
    },
  },
  coloredShadow,
  mlAuto,
  mrAuto,
  cardTitle: {
    ...cardTitle,
    textAlign: "left",//modified
    marginBottom: "0px !important",
    textTransform: "capitalize",//modified
    color: "#3f3f3f",//modified


  },
  cardDescription: {
    color: grayColor[0],
    textAlign: "center",
  },
  container: {
    ...container,
  },
  description: {//All modified
    color: "#3f3f3f!important",
    textTransform: "capitalize",
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "block",
    textOverflow: "ellipsis",
    fontWeight: "400",
    margin: "0"

  },
  section: {
    ...section,
    padding: "70px 0px",
  },
  priceContainer: {
    display: "inline-flex",
    textTransform: "capitalize",//modified

  },
  price: {
    fontSize: "18px",
    color: grayColor[22],
  },
  pullRight: {
    float: "right",
  },
  cardHeaderImage: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    marginTop: "-30px",
    borderRadius: "6px",
    "& img": {
      width: "100%",
      borderRadius: "6px",
      pointerEvents: "none",
    },
    // "& a": {
    //   display: "block",
    // },
  },
  justifyContentBetween: {
    WebkitBoxPack: "justify!important",
    justifyContent: "space-between !important",
  },
  customExpandPanel: {
    maxHeight: "273px",
    overflowY: "scroll",
    "&  label": {
      display: "block",
    },
  },
  priceSlider: {
    fontWeight: "500",
  },
  refineButton: {
    margin: "-3px 0",
  },
  cardBodyRefine: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  textLeft: {
    textAlign: "left",
  },
  cardImage: {//created
    objectFLit: "cover",
    borderRadius: "0 0 5px 5px",
    borderLeft: "1px solid #dee2e6",
    borderRight: "1px solid #dee2e6",
    borderBottom: "1px solid #dee2e6",
    padding: "0px",
    width: "100%"
  },
  formControl: {//created
    display: "block",
    width: "100%",
    height: "calc(1.5em + .75rem + 2px)",
    color: "#495057",
    border: "1px solid #ced4da",
    borderRadius: "3px",
    padding: "0px",

  },
  selectText: {//created
    width: "100%",
    color: "#484848",
    backgroundColor: "#ffffff",
    textAlignLast: "center",
    verticalAlign: "middle",
    justifyContent: "center"
  },
  storeName: {//created
    letterSpacing: "0",
    textAlignLast: "left",
    fontSize: "12px",
    color: "#3f3f3f!important",
    width: "100%",
    fontWeight: "700!important"
  },
  cardLabel: {//created
    border: "1px solid #ced4da",
    borderRadius: "5px 5px 0 0",
    textAlignLast: "right",
  }
};

export default styles;
