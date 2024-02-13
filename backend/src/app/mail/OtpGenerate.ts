
export function generateOTP() : number {
    let otp = '';
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10); // Generate a random number between 0 and 9
    }
    return Number(otp);
  }
  

  
  