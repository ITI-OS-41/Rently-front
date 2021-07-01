import {Button, InputLabel, Select, TextField} from "@material-ui/core";
import {Formik} from 'formik';
import Grid from "@material-ui/core/Grid";
import React, {useEffect, useState} from "react";
import {get} from "../../../functions/request";
import FormControl from "@material-ui/core/FormControl";

const conditions = ["perfect", "very good", "descent", "good", "fair"];

export default function SearchFilters(props) {

  const { changeFilter } = props;
  const [categorys, setCategorys] = React.useState([]);


  useEffect(() => {
    get('/category?model=item')
      .then(response => {
        setCategorys(response.data.res)
      })
  }, [])


  const submitForm = (values) => {
    changeFilter(values)
  }


  return (
    <Formik
      onSubmit={(values) => {
        submitForm(values)
      }}
      enableReinitialize={true}
      initialValues={{}}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        } = props;
        return (
          <form onSubmit={handleSubmit} style={{marginTop: '2rem'}}>

            <Grid container spacing={2}>

              <Grid item md={3} sm={5} xs={12}>
                <TextField variant="outlined" fullWidth id="name" name="name" label="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
              </Grid>

              <Grid item md={3} sm={5} xs={12}>
                <FormControl
                  error={touched.category && Boolean(errors.category)}
                  fullWidth variant="outlined"
                >
                  <InputLabel>category</InputLabel>
                  <Select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.category}
                    label="category"
                    inputProps={{
                      name: 'category',
                    }}
                  >
                    <option value=''/>

                    {categorys.map(category => {
                      return (<option key={category._id} aria-label={category.name} value={category._id}>{category.name}</option>)
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md={3} sm={5} xs={12}>
                <FormControl
                  error={touched.condition && Boolean(errors.condition)}
                  fullWidth variant="outlined"
                >
                  <InputLabel>condition</InputLabel>
                  <Select
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.condition}
                    label="condition"
                    inputProps={{
                      name: 'condition',
                    }}
                  >
                    <option value=''/>

                    {conditions.map(condition => {
                      return (<option key={condition} aria-label={condition} value={condition}>{condition}</option>)
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md={3} sm={5} xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  size={"large"}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
        )
      }}
    </Formik>
  )
}
