import nodemailer from "nodemailer";

export async function sendMail({ to, subject, body }) {
  const { GMAIL_NAME, GMAIL_PASS } = process.env;
  //
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true
      
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: { user: GMAIL_NAME, pass: GMAIL_PASS },
  });

  const mailOptions = {
    from: GMAIL_NAME,
    to,
    subject,
    html: body,
  };

  //   send
  try {
    const sendResult = await transport.sendMail(
      mailOptions
      // function (error, info) {
      //   if (error) {
      //     console.log("Email failed to send:", error);
      //   } else {
      //     console.log("Email sent:", info.response);
      //   }
      // }
    );
    console.log("sendResult", sendResult);
    console.log("dw email sent");
    return { msg: "Email sent" };
  } catch (e) {
    console.log("dw email not sent", e.message);
    return { error: e.message };
  }
}
