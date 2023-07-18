function addCommas(number) {
    const numberString = String(number);
    let formattedNumber = "";
  
    for (let i = numberString.length - 1; i >= 0; i--) {
      formattedNumber = numberString[i] + formattedNumber;
  
      if ((numberString.length - i) % 3 === 0 && i !== 0) {
        formattedNumber = "," + formattedNumber;
      }
    }
  
    return formattedNumber;
  }

  export default addCommas;