export default {
    formId: 'checkoutForm',
    formField: {
      category: {
        name: 'category',
        label: 'First name*',
        requiredErrorMsg: 'First name is required'
      },
      subCategory: {
        name: 'subCategory',
        label: 'Last name*',
        requiredErrorMsg: 'Last name is required'
      },
      condition: {
        name: 'condition',
        label: 'Address Line 1*',
        requiredErrorMsg: 'Address Line 1 is required'
      },
      item: {
        name: 'item',
        label: 'Address Line 2'
      },
      city: {
        name: 'city',
        label: 'City*',
        requiredErrorMsg: 'City is required'
      },
      state: {
        name: 'state',
        label: 'State/Province/Region'
      },
      zipcode: {
        name: 'zipcode',
        label: 'Zipcode*',
        requiredErrorMsg: 'Zipcode is required',
        invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
      },
      country: {
        name: 'country',
        label: 'Country*',
        requiredErrorMsg: 'Country is required'
      },
      useAddressForPaymentDetails: {
        name: 'useAddressForPaymentDetails',
        label: 'Use this address for payment details'
      },
      nameOnCard: {
        name: 'nameOnCard',
        label: 'Name on card*',
        requiredErrorMsg: 'Name on card is required'
      },
      cardNumber: {
        name: 'cardNumber',
        label: 'Card number*',
        requiredErrorMsg: 'Card number is required',
        invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
      },
      expiryDate: {
        name: 'expiryDate',
        label: 'Expiry date*',
        requiredErrorMsg: 'Expiry date is required',
        invalidErrorMsg: 'Expiry date is not valid'
      },
      cvv: {
        name: 'cvv',
        label: 'CVV*',
        requiredErrorMsg: 'CVV is required',
        invalidErrorMsg: 'CVV is invalid (e.g. 357)'
      }
    }
  };
  