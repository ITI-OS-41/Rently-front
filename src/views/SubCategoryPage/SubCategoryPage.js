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
import NoDataToShow from "../../components/global/NoDataToShow";
import ReactPaginate from "react-paginate";
import "./Sections/PaginationStyle.css";
import Grow   from '@material-ui/core/Grow';

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
export default function SubCategoryPage(props) {
  const id = props.match.params.id;

  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [subCategories, setSubCategory] = useState([]);
  const [category, setCategory] = useState(null);
  const [subCategoriesCount, setsubCategoryCount] = useState([0]);
  const [checked, setChecked] = React.useState(true);

  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 12;
  const TotalPageNum = Math.ceil(subCategoriesCount / cardsPerPage);
  useEffect(() => {
    get(`/subcategory?category=${id}`).then((response) => {
      let res = response.data.res;
      setSubCategory(res);
      setsubCategoryCount(res.length);
    });
  }, []);
  useEffect(() => {
    get(`/category/${id}`).then((response) => {
      let res = response.data;
      setCategory(res);
      console.log(response.data._id);
    });
  }, []);

  const pagesVisited = pageNumber * cardsPerPage;
  const displaySubCategories = subCategories
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((cat) => {
      return (
        <Grow in={checked} {...(checked ? { timeout: 1000 } : {})}>

        <Grid item key={cat._id} xs={12} md={4} lg={4}>
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

      {category && (
        <Parallax image={category.photo} filter="dark" small>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
                <h1 className={classes.title}>{category.name}</h1>
                <h5 className={classes.title}>{category.description}</h5>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      )}

      <div className={classes.main}>
        <div className={classes.container}>
          <Grid container spacing={6}>
            {/* {subCategories.length ? (
              {displaySubCategories}
            ) : (
              <NoDataToShow text={"No subcategories yet"} />
            )} */}
                          {displaySubCategories}

          </Grid>
        </div>
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

      <Footer />
    </div>
  );
}
