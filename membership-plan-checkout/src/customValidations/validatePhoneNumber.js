const validatePhoneNumber = (value) => {
    if (!/^[0-9\-\+\(\)]*$/.test(value)) {
      return "Invalid phone number format";
    }
  
    const number = value.replace(/[^0-9]/g, "");
  
    if (number.length < 6 || number.length > 20) {
      return "Phone number must contain 6 - 20 digits of numbers";
    }
  
    return true;
  };
  
  export default validatePhoneNumber;
  