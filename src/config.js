const SERVER = "https://rently-service-backend.herokuapp.com/api";

const CAROUSEL_SETTINGS = {
  withoutControls: true,
  slideWidth: "300px",
  cellSpacing: 20,
  heightMode: "max",
  framePadding: "30px 0",
  disableEdgeSwiping: true,
  scrollMode: "remainder",
  slidesToScroll: "auto",
};

const SCROLLBAR_CONFIG = {
  autoHide: true,
  universal:true,
  renderTrackHorizontal: () => {
    return <span/>;
  }
};



export {
  SERVER,
  CAROUSEL_SETTINGS,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET,
  UserProfile
  SCROLLBAR_CONFIG
}
