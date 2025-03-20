// import Contact from "@/models/contact";
// import { connectToDB } from "@/utils/database";

import { sendMail } from "../../../utils/mail/mail";
import Email from "../../../utils/emailTemplates/contactUs";
import { render } from "@react-email/render";

import { contactSchema } from "../../../utils/zodSchemas/contactSchema";

export const POST = async (request) => {
  const { name, email, comment, tel, token } = await request.json();
  // console.log(name, email, comment, "CONTACT POST");
  // console.log("tel type", typeof tel);

  if (!name || !email || !comment) {
    // console.log("DW no name/email/comment");
    return new Response(
      JSON.stringify({
        errors: "All form fields are required. Please try again",
      }),
      {
        status: 401,
      }
    );
  }

  const validatedFields = contactSchema.safeParse({
    name: name,
    email: email,
    comment: comment,
    tel: tel,
    // token: token,
  });

  // console.log(validatedFields);

  if (!validatedFields.success) {
    return new Response(
      JSON.stringify({
        errors: "Fields not filled out correctly",
      }),
      {
        status: 401,
      }
    );
  }

  //no capchta token

  // if (!token) {
  //   return new Response(
  //     JSON.stringify({
  //       errors: "Google reCAPTCHA issue, please try later",
  //     }),
  //     {
  //       status: 401,
  //     }
  //   );
  // }

  //*************** validate reCaptcha token

  // test bot
  // https://stackoverflow.com/questions/48224799/test-invisible-recaptcha

  // try {
  //   // https://developers.google.com/recaptcha/docs/verify#api_request
  //   const url = "https://www.google.com/recaptcha/api/siteverify";

  //   const captchaResponse = await fetch(url, {
  //     method: "POST",
  //     headers: { "Content-type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams({
  //       secret: process.env.RECAPTCHA_SECRET_KEY, // See prior section
  //       response: token, // the user's generated "Captcha" token
  //     }),
  //   });

  //   const data = await captchaResponse.json();
  //   console.log("data", data);
  //   //
  //   if (!data.success.true) {
  //     // "all gd"
  //   } else {
  //     return new Response(
  //       JSON.stringify({
  //         errors: "Google Captcha issue, please try later",
  //       }),
  //       {
  //         status: 200,
  //       }
  //     );
  //   }
  // } catch (err) {
  //   console.log("DW error", error.message);
  //   return new Response(
  //     JSON.stringify({ errors: "Issue with Server. Please try again" }),
  //     {
  //       status: 400,
  //     }
  //   );
  // }

  // ******************end capchta token validation***********************************

  ///actual task
  try {
    ////////////////////////////////////////////send email

    const body = render(
      <Email
        email={email.toLowerCase().trim()}
        name={name.trim()}
        comment={comment.trim()}
        tel={tel.trim()}
      />
    );

    // await connectToDB(); // create connection on every request
    // const newEmail = new Contact({ name, email, tel, comment });
    // await newEmail.save();

    let emailaddress = process.env.GMAIL_NAME;
    // let emailaddress = "checkingthegateltd@gmail.com";

    const data = await sendMail({
      to: emailaddress,
      subject: `Contact from telephone number:  ${tel}`,
      body,
    });

    // console.log("Data", data);

    if (data?.msg) {
      return new Response(
        JSON.stringify({
          msg: `Thank you for getting in touch, I'll get back to you shortly.`,
        }),
        {
          status: 200,
        }
      );
    } else {
      return new Response(
        JSON.stringify({ errors: "Email not sent. Please try again later" }),
        {
          status: 500,
        }
      );
    }

    //////////////////////////////////////////////////
  } catch (error) {
    console.log("DW error", error.message);
    return new Response(
      JSON.stringify({ errors: "Issue with Server. Please try again later" }),
      {
        status: 500,
      }
    );
  }
};
