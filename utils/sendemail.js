const nodemailer = require("nodemailer");

const sendEmail = async (emailTo, subject, text) => {
  try {
    // Generate a test account from Ethereal
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter using Ethereal test SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'avery.macgyver94@ethereal.email',
        pass: 'xH96Xmb2TVQ6XTeMUv'
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Your App" <no-reply@yourapp.com>', // sender address
      to: emailTo, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
