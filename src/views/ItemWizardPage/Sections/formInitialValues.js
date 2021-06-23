import checkoutFormModel from "./checkoutFormModel";
const {
  formField: {
    category,
    subCategory,
    condition,
    item,
    
  },
} = checkoutFormModel;

export default {
  [category.name]: "",
  [subCategory.name]: "",
  [condition.name]: "",
  [item.name]: "",
 
};
