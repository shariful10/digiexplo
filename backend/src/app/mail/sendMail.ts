import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
export const sendMail = async ({email, otp, subject,username}:{email:string,otp:number,subject:string,username:string}) => {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  const filePath = path.join(__dirname, "..", "..", "views");
  const fileVal = await ejs.renderFile(`${filePath}/email.ejs`, { otp ,username});

  const mailSend = await transporter.sendMail({
    from: `digiexplo <${process.env.MAIL_USER}>`,
    to: email,
    subject,
    html: fileVal,
  });
  return mailSend
};


