/*eslint-disable*/
import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
// sections for this page
import SectionText from "./Sections/SectionText.js";
import SectionComments from "./Sections/SectionComments.js";
import cardBlog4 from "../../assets/img/examples/card-blog4.jpg";

import { get } from "../../functions/request";


import blogPostPageStyle from "../../assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

const useStyles = makeStyles(blogPostPageStyle);

export default function BlogPostPage(props) {
  const id = props.match.params.id;
  console.log("id: ", id);

  const [blog, setBlog] = useState(null);
  useEffect(() => {
    get(`/blog/${id}`).then((response) => {
      let res = response.data;
      setBlog(res);
      console.log("blog : ", res);
    });
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    blog && (
      <div>
        <Header />
        <Parallax image={blog.photo ? blog.photo : cardBlog4} filter="dark">
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem md={8} className={classes.textCenter}>
                <h1 className={classes.title}>{blog.title}</h1>
                <h4 className={classes.subtitle}>
                  by{" "}
                  <b>
                    {blog.author.firstname} {blog.author.lastname}{" "}
                  </b>
                  , {blog.createdAt}.
                </h4>

              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.main}>
          <div className={classes.container}>
            <SectionText blog={blog} />
            <SectionComments />
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}