import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import { get } from "functions/request.js";

import LoadingContainer from "components/global/LoadingContainer";



const modelName = "user";

export default function User({ ...rest }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get(`/${modelName}/infor`)
      .then((response) => {
        const res = response.data;
        setUser(res);
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
        {user ? (
        <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <h4 style={{textAlign: "center"}}>Wallets you have : ................................... <b>{user.wallet || 0}$</b> </h4>
              </GridItem>
           </GridContainer>
        ) : (
          <LoadingContainer />
        )}
      </div>
    </div>
  );
}
