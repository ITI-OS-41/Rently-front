  const SERVER = "https://rently-service-backend.herokuapp.com/api";
// const SERVER = "http://localhost:5052/api";


const CAROUSEL_SETTINGS = {
  withoutControls: true,
  slideWidth: "260px",
  cellSpacing: 20,
  heightMode: "max",
  framePadding: "30px 0",
  disableEdgeSwiping: true,
  scrollMode: "remainder",
  slidesToScroll: "auto",
};
const DATAGRID_RESULTS_PER_PAGE = 5;
const DATAGRID_WIDTH = 1200;
const HTTPS = true;
const CLOUDINARY_URL =
  "cloudinary://524458174797441:x2MQJicIN5bP7zZP2C_pAFBeLCM@rently-service";
const CLOUDINARY_CLOUD_NAME = "rently-service";
const CLOUDINARY_API_KEY = "524458174797441";
const CLOUDINARY_SECRET = "x2MQJicIN5bP7zZP2C_pAFBeLCM";

const SCROLLBAR_CONFIG = {
  autoHide: true,
  universal: true,
  renderTrackHorizontal: () => {
    return <span />;
  },
};

export {
  SERVER,
  CAROUSEL_SETTINGS,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET,
  SCROLLBAR_CONFIG,
  HTTPS,
  DATAGRID_RESULTS_PER_PAGE,
  DATAGRID_WIDTH,
};
