function generateRandomDigits() {
    const characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let digits = '';
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      digits += characters[randomIndex];
    }
  
    return digits;
  }

  export default generateRandomDigits;