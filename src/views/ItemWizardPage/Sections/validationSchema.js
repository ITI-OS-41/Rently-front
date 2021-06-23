import * as Yup from "yup";
import moment from "moment";
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    category,
    subCategory,
    condition,
    item
  
  }
} = checkoutFormModel;



const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [category.name]: Yup.string().nullable().required(`category is required`),
    [subCategory.name]: Yup.string()
      .nullable()
      .required(`subcategory is required`),
    [condition.name]: Yup.string()
      .nullable()
      .required(`item condition is required`),
    [item.name]: Yup.string()
      .required(`item name is required`)
      .test("len", `not valid item name`, (val) => val && val.length === 5),
  }),
  // Yup.object().shape({
  //   [nameOnCard.name]: Yup.string().required("${nameOnCard.requiredErrorMsg}"),
  //   [cardNumber.name]: Yup.string()
  //     .required("${cardNumber.requiredErrorMsg}")
  //     .matches(visaRegEx, "cardNumber.invalidErrorMsg"),
  //   [expiryDate.name]: Yup.string()
  //     .nullable()
  //     .required(`expiryDate.requiredErrorMsg`)
  //     .test("expDate", "expiryDate.invalidErrorMsg", (val) => {
  //       if (val) {
  //         const startDate = new Date();
  //         const endDate = new Date(2050, 12, 31);
  //         if (moment(val, moment.ISO_8601).isValid()) {
  //           return moment(val).isBetween(startDate, endDate);
  //         }
  //         return false;
  //       }
  //       return false;
  //     }),
  //   [cvv.name]: Yup.string()
  //     .required(`cvv is required`)
  //     .test("len", `invalid cvv`, (val) => val && val.length === 3),
  // }),
];
