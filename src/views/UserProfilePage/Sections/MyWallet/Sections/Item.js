import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { get } from "functions/request.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import LoadingContainer from "components/global/LoadingContainer";

import ItemCard from "components/Items/ItemCard";

const useStyles = makeStyles(blogsStyle);
const modelName = "item";

export default function Items({ ...rest }) {
  const classes = useStyles();
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get(`/${modelName}?isPublished=true&isAvailable=true`)
      .then((response) => {
        const res = response.data.res;
        setItems(res);
        console.log("item in wallet--->",res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="cd-section" {...rest}>
      <div>
        {items ? (
          <GridContainer justify="center">
            {items.map((item) => (
              <GridItem xs={12} sm={12} md={4} lg={4} xl={4}>
                <ItemCard key={item._id} item={item} />
              </GridItem>
            ))}
          </GridContainer>
        ) : (
          <LoadingContainer />
        )}
      </div>
    </div>
  );
}
