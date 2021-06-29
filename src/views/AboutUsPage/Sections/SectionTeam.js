import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { useMediaQuery } from "react-responsive";

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
// import Ghada from "assets/img/ghada.jpeg";
import alaa from "assets/img/alaa.jpeg";
import Cat from "assets/img/cat.jpg";
import Cactus from "assets/img/cactus.png";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

const teamStyle = {
  mrAuto,
  mlAuto,
  title: {
    ...title,
    marginBottom: "10px",
  },
  description: {
    ...description,
    marginBottom: "40px",
    marginTop: "30px",
    color: "#000",
  },
  cardTitle,
  cardDescription: {
    color: grayColor[0],
  },
  team: {
    padding: "60px 0px",
  },
  textCenter: {
    textAlign: "center!important",
  },
  img: {
    borderRadius: "50%",
    height: "150px",
    width: "150px",
  },
  textMuted: {
    color: grayColor[7] + " !important",
  },
  justifyContent: {
    justifyContent: "center!important",
  },
  color: {
    color: "#038C7F",
  },
  iconStyle: {
    marginBottom: "30px",
  },
};

const useStyles = makeStyles(teamStyle);

export default function SectionTeam() {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: "(max-width:850px)" });
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
          <h3 className={classes.title + " " + classes.color}>
            We are nerd rockstars
          </h3>
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

      <Swiper slidesPerView={isMobile ? 2 : 3}>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Conan} className={classes.img} />
            <h5 className={classes.title + " " + classes.color}>
              Muhammed Abdurahmman
            </h5>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="https://linkedin.com/in/mabdurahman68"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:muhammed.abdurahman93@gmail.com"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="https://github.com/Mabdurahman68"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div></SwiperSlide>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Dexter} className={classes.img} />
            <h4 className={classes.title + " " + classes.color}>
              Mahmoud Hassan
            </h4>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="https://www.linkedin.com/in/mhmod-hsn"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:hsn.mhmod.96@gmail.com"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="https://github.com/Mhmod-Hsn"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div>
          </SwiperSlide>
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={alaa} className={classes.img} />
            <h4 className={classes.title + " " + classes.color}>
              Alaa Elbehery
            </h4>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="https://www.linkedin.com/in/alaa-elbehery/"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:alaaelbehairy12@gmail.com"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="https://github.com/Alaa278"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div>
          </SwiperSlide>
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Cat} className={classes.img} />
            <h4 className={classes.title + " " + classes.color}>Nada Ahmed</h4>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="https://www.linkedin.com/in/nadaaskora/"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:nadaaskora@gmail.com"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="https://github.com/nadaaskora"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div>
          </SwiperSlide>
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Cactus} className={classes.img} />
            <h4 className={classes.title + " " + classes.color}>
              Omnia Soliman
            </h4>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="#"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:#"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="#"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div>
          </SwiperSlide>
        </GridItem>

        <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
          <SwiperSlide style={{ textAlign: "center" }}>
            <img src={Atef} className={classes.img} />
            <h4 className={classes.title + " " + classes.color}>Assem Gamal</h4>
            <h5>SOFTWARE ENGINEER</h5>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              fuga?
            </p>
            <div>
              <Button
                href="#"
                justIcon
                simple
                color="linkedin"
              >
                <i className="fab fa-linkedin" />
              </Button>
              <Button
                href="mailto:#"
                justIcon
                simple
                color="google"
              >
                <i className="fas fa-envelope" />
              </Button>
              <Button
                href="#"
                justIcon
                simple
                color="github"
              >
                <i class="fab fa-github"></i>
              </Button>
            </div>
          </SwiperSlide>
        </GridItem>
      </Swiper>
    </div>
  );
}
