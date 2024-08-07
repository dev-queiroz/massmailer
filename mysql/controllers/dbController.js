const { getAllEmails } = require("../models/dbModel");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sendEmailToAllUsers = (req, res) => {
  getAllEmails((err, emails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching emails", error: err });
    }

    sendBroadcastEmail(emails, (error, info) => {
      if (error) {
        return res.status(500).json({ message: "Error sending emails", error });
      }

      res.status(200).json({ message: "Emails sent successfully", info });
    });
  });
};

const sendBroadcastEmail = (emailList, callback) => {
  const templatePath = path.join(
    __dirname,
    `../templates/${process.env.EMAIL_TEMPLATE_FILE}`
  );

  fs.readFile(templatePath, "utf-8", (err, htmlContent) => {
    if (err) {
      console.error("Error reading HTML template:", err);
      return callback(err);
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: emailList.join(","),
      subject: process.env.EMAIL_SUBJECT || "Broadcast Email",
      html: htmlContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return callback(error);
      }
      console.log("Email sent:", info.response);
      callback(null, info);
    });
  });
};

module.exports = {
  sendEmailToAllUsers,
};
