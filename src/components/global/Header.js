import Header from "../Header/Header.js";
import HeaderLinks from "./HeaderLinks.js";
import React from "react";


export default () => {
  return (
    <Header
      brand="Rently"
      links={<HeaderLinks dropdownHoverColor="info" />}
      fixed
      color="transparent"
      changeColorOnScroll={{
        height: 400,
        color: "info",
      }}
    />
  )
}
