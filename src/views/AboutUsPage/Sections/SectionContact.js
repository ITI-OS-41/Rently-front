import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = (event) => {
    setSpecialitySelect(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Want to work with us?
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            Are you interested in being part of a global movement? Send us a
            resume and cover letter explaining why you would be a great fit. We
            value unique talents and perspectives so don’t be afraid to tell us
            what you’re all about! Additionally, we would love to see your
            RuckifyStore! Don’t forget to attach a link when you apply.
          </h4>
          <form>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={specialitySelect}
                    onChange={handleSpeciality}
                    inputProps={{
                      name: "specialitySelect",
                      id: "speciality-select",
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem,
                      }}
                    >
                      Speciality
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="1"
                    >
                      I{"'"}m a Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      I{"'"}m an Owner
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="3"
                    >
                      I{"'"}m a Designer
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button color="primary" round>
                  Let{"'"}s talk
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
