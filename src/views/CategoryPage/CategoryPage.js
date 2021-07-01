import React, { useEffect, useState } from "react";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/global/Footer";
import Header from "components/global/Header";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { get } from "functions/request";
import Grid from "@material-ui/core/Grid";
import SectionInterested from "./Sections/SectionInterested.js";
import Fade from '@material-ui/core/Fade';
import Zoom   from '@material-ui/core/Zoom';
import Grow   from '@material-ui/core/Grow';

import ReactPaginate from "react-paginate";
import "./Sections/PaginationStyle.css";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: "10%",

  },
  title: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  main: {
    background: "white",
    position: "relative",
    zIndex: "3",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1140px",
    },
  },
}));
export default function CategoryPage() {
  const classes = useStyles();

  const [categories, setCategory] = useState([]);
  const [categoriesCount, setCategoryCount] = useState([0]);
  const [checked, setChecked] = React.useState(true);

  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 12;
  const TotalPageNum = Math.ceil(categoriesCount / cardsPerPage);
  useEffect(() => {

    get("/category")
        .then((response) => {
          let res = response.data.res;
          setCategory(res);
          console.log("response-00-> ", response);
          console.log("res-00-> ", res);
        })
        .catch(e=>{
          console.log(e)
        })
  }, []);

  const pagesVisited = pageNumber * cardsPerPage;
  console.log("categoriesCount >  ", categoriesCount);
  const displaycategories = categories
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((cat) => {
      return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>

        <Grid item key={cat._id} xs={12} md={4} lg={3}>
          <SectionInterested cat={cat} />
        </Grid>
        </Grow>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    console.log("m", selected);
  };
  return (
    <div>
      <Header />

      <Parallax
        image={require("assets/img/categories.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h1 className={classes.title}>
                Scroll Down to watch our Categories
              </h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classes.main}>
        <div className={classes.container}>

          <Grid container spacing={6}>
            {displaycategories}
          </Grid>
          <div
            style={{
              display: "block",
              margin: "auto",
              padding: "auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={TotalPageNum}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
