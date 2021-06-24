import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


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
