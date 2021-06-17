import { makeStyles } from "@material-ui/core";
import footerStyle from "../../assets/jss/material-kit-pro-react/footer";
import Footer from "components/Footer/Footer.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import Favorite from "@material-ui/icons/Favorite";

const useStyles = makeStyles(footerStyle);

export default () => {
  const classes = useStyles();
  return (
    <Footer
      theme="white"
      content={
        <div>
          <div className={classes.left}>
            <a
              href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
              target="_blank"
              className={classes.footerBrand}
            >
              Material Kit PRO React
            </a>
          </div>
          <div className={classes.pullCenter}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/?ref=mkpr-presentation"
                  target="_blank"
                  className={classes.block}
                >
                  Creative Tim
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/presentation?ref=mkpr-presentation"
                  target="_blank"
                  className={classes.block}
                >
                  About us
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a href="//blog.creative-tim.com/" className={classes.block}>
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                  target="_blank"
                  className={classes.block}
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>
          <div className={classes.rightLinks}>
            <ul>
              <li>
                <Button
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  color="twitter"
                  justIcon
                  simple
                >
                  <i className="fab fa-twitter" />
                </Button>
              </li>
              <li>
                <Button
                  href="https://dribbble.com/creativetim?ref=creativetim"
                  target="_blank"
                  color="dribbble"
                  justIcon
                  simple
                >
                  <i className="fab fa-dribbble" />
                </Button>
              </li>
              <li>
                <Button
                  href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  color="instagram"
                  justIcon
                  simple
                >
                  <i className="fab fa-instagram" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      }
    />
  );
};
