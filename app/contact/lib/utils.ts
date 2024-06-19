"use server";
import nodemailer from "nodemailer";

export const sendEmail = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    console.log("sending with nodemailer...");
    await sendWithNodeMailer(formData);

    return "Email sent successfully.";
  } catch (error) {
    console.error("Failed to send users email: ", error);
    return "something went wrong!";
  }
};

export const sendWithNodeMailer = async (data: FormData) => {
  try {
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const address = data.get("address");
    const subject = data.get("subject");
    const message = data.get("message");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "werukioni@gmail.com",
        pass: process.env.NODEMAILER_PASSKEY,
      },
    });

    const info = await transporter.sendMail({
      from: `"${name} " <${email}>`, // sender address
      to: "werukioni@gmail.com", // list of receivers
      subject: `${subject}`, // Subject line
      html: `<body>
                <p>${message}</p>
                <br />
                <span>sent by:</span><br />
                <pre>
                <span>${name}</span>
                <span>phone: ${phone}</span>
                <span>address: ${address}</span>
                </pre>
                <br />
            </body>`, // html body
    });
    console.log("confirmation: ", info.messageId);
  } catch (error) {
    console.error("Nodemailer Failed: ", error);
    throw error;
  }
};
