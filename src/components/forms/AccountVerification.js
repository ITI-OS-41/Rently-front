import React, {useEffect, useState} from "react";
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
import {get, post} from "../../functions/request";
import UploadImages from "../../views/ItemWizardPage/UploadImages";
import ImagesContainer from "../global/ImagesContainer";
import {uploadImage} from "../../functions/helpers";
import Typography from "@material-ui/core/Typography";

const validationSchema = yup.object().shape({
  // id: yup
  //     .string('Enter your password')
  //     .required('Password is required'),
  // personal: yup
  //     .string('Enter your password again')
  //     .oneOf([yup.ref('password')], "Confirm Password must be matched with password"),
});


export default function AccountVerification(props) {
    const [isRequesting, setIsRequesting] = useState(false);
    const [user, setUser] = useState({});
    const [editable, setEditable] = useState(false);


    useEffect(() => {
        get(`/user/infor`)
            .then(res => {
                setUser(res.data)
            })
    }, [])


    const initialValues = {
        id: '',
        personal: ''
    };

    const submitForm = async (values) => {
        setIsRequesting(true);
        console.log(values.id)

        let photos = []
        if (values.id) {
            await uploadImage(values.id, 'user')
                .then((res) => {
                photos.push(res.data.url);
            });
        }
        if (values.personal) {
            await uploadImage(values.personal, 'user')
                .then((res) => {
                    photos.push(res.data.url);
            });
        }
        console.log(photos)

        patch(`/user/update`, {
            isVerified: false,
            verificationPhotos: photos
        }, "Verification photos Updated successfully")
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
            })
            .finally(() => {
                setIsRequesting(false);
            });
    };

    return (
        user.username ? <Formik
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
                            <Grid item xs={6}>
                                <ImagesContainer background="https://d1novo54w0hnhk.cloudfront.net/images/DriverLicense_selfie.png" multiple={false} onSubmit={photo=>setFieldValue('id',photo[0])}/>
                            </Grid>


                            <Grid item xs={6}>
                                <ImagesContainer background="https://d1novo54w0hnhk.cloudfront.net/images/DriverLicense_card.png" multiple={false} onSubmit={photo=>setFieldValue('personal',photo[0])}/>
                            </Grid>
                        </Grid>

                        <ul style={{marginTop: '1rem'}}>
                            <li>No shadows. If possible use light from the window.</li>
                            <li>Texts should be readable and not covered with your fingers.</li>
                            <li>The photo should be clearly seen.</li>
                            <li>Your face on selfie should be alike your photo in the document (no glasses, no hat etc.)</li>
                        </ul>

                        {
                            ( values.id && values.personal ) &&
                            <SubmitButton
                                style={{marginTop: '1rem'}}
                                type="update"
                                fullWidth
                                isRequesting={isRequesting}
                            />

                        }

                    </form>
                );
            }}
        </Formik> : ''

    );
}
