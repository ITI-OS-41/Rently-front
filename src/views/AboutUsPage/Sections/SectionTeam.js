import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Conan from "assets/img/conan.png";
import Dexter from "assets/img/dexter.png";
import Atef from "assets/img/atef.jpg";
import Ghada from "assets/img/ghada.jpeg";
import Cat from "assets/img/cat.jpg";
import Cactus from "assets/img/cactus.png";
import teamStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/teamStyle.js";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.team}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>We are nerd rockstars</h2>
          <h5 className={classes.description}>
            "We are passionate about giving everyone the opportunity to rent
            anything they can think of, and to start their own rental businesses
            while helping the environment. Ruckifying instead of buying helps
            lower our carbon footprint, and in the four years since we started,
            we’re seeing how the sharing economy can have a profound, positive
            impact on our planet and communities."
          </h5>
        </GridItem>
      </GridContainer>

      <Swiper pagination={true} slidesPerView={2}>
        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Conan} style={{ borderRadius: "50%", width: "200px" }} />
            <h3>Muhammed Abdurahmman</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Dexter} style={{ borderRadius: "50%", width: "275px" }} />
            <h3>Mahmoud Hassan</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Atef} style={{ borderRadius: "50%", width: "300px" }} />
            <h3>Assem Gamal</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img
              src={Ghada}
              style={{ borderRadius: "50%", height: "300px", width: "300px" }}
            />
            <h3>Alaa Ahmed</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>
        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img
              src={Cat}
              style={{ borderRadius: "50%", height: "300px", width: "300px" }}
            />
            <h3>Nada Ahmed</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>

        <GridItem md={4} sm={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img
              src={Cactus}
              style={{ borderRadius: "50%", height: "300px", width: "300px" }}
            />
            <h3>Omnia Soliman</h3>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <Button href="#pablo" justIcon simple color="twitter">
              <i className="fab fa-twitter" />
            </Button>
            <Button href="#pablo" justIcon simple color="facebook">
              <i className="fab fa-facebook" />
            </Button>
            <Button href="#pablo" justIcon simple color="google">
              <i className="fab fa-google" />
            </Button>
          </SwiperSlide>
        </GridItem>
      </Swiper>
    </div>
  );
}
