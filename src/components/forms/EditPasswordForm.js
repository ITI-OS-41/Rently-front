import React, {useState} from "react";
import {Button, TextField,} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import {Formik} from "formik";
import * as yup from "yup";
import {patch} from "functions/request";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";
// import Button from "components/CustomButtons/Button";
// import { patch } from "functions/request";
import SubmitButton from "../global/SubmitButton";
import {post} from "../../functions/request";

const useStyles2 = makeStyles(profilePageStyle);

const modelName = "user";

const validationSchema = yup.object().shape({
  password: yup
      .string('Enter your password')
      .required('Password is required'),
  confirmPassword: yup
      .string('Enter your password again')
      .oneOf([yup.ref('password')], "Confirm Password must be matched with password"),
});

const useStyles = makeStyles((theme) => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        margin: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function EditPasswordForm(props) {
    const [isRequesting, setIsRequesting] = useState(false);
    const [user, setUser] = useState({});
    const [editable, setEditable] = useState(false);

    const initialValues = {
        oldPassword: '',
        password: '',
        confirmPassword: '',
    };


    const submitForm = async (values) => {
        setIsRequesting(true);

        post(`/user/reset`, values, "User Updated successfully")
            .then((response) => {

            })
            .catch((err) => {
            })
            .finally(() => {
                setIsRequesting(false);
            });
    };

    return (
        <Formik
            //!
            onSubmit={(values) => {
                submitForm(values);
            }}
            validationSchema={validationSchema}
            initialValues={initialValues}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <TextField disabled={!editable} variant="outlined" fullWidth type="password" id="oldPassword" name="oldPassword" label="oldPassword" value={values.oldPassword} onBlur={handleBlur} onChange={handleChange} error={touched.oldPassword && Boolean(errors.oldPassword)} helperText={touched.oldPassword && errors.oldPassword} />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField disabled={!editable} variant="outlined" fullWidth type="password" id="password" name="password" label="password" value={values.password} onBlur={handleBlur} onChange={handleChange} error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
                            </Grid>
                            <Grid item xs={6}>
                              <TextField disabled={!editable} variant="outlined" fullWidth type="password" id="confirmPassword" name="confirmPassword" label="confirmPassword" value={values.confirmPassword} onBlur={handleBlur} onChange={handleChange} error={touched.confirmPassword && Boolean(errors.confirmPassword)} helperText={touched.confirmPassword && errors.confirmPassword} />
                            </Grid>
                        </Grid>


                        {
                            editable ?
                                (
                                    <SubmitButton
                                        style={{marginTop: '1rem'}}
                                        type="update"
                                        fullWidth
                                        isRequesting={isRequesting}
                                    />
                                )
                                :
                                (
                                    <Button
                                        type="button"
                                        color="primary"
                                        size="large"
                                        onClick={() => {
                                            setEditable(true)
                                        }}
                                    >
                                        Edit Data
                                    </Button>
                                )
                        }

                    </form>
                );
            }}
        </Formik>

    );
}
