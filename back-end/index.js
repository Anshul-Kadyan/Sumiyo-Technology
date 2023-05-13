const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON request body

app.post("/", async (req, res) => {
  const user_subject = req.body.subject;
  const user_email = req.body.email;
  const user_message = req.body.message;

  // Handle the form submission, e.g. save data to a database

  // Create a nodemailer transporter object
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",
      pass: "",
    },
  });

  // Set up the email message
  let mailOptions = {
    from: "",
    to: "",
    subject: user_subject,
    text: user_message,
    html: `<div>
    <h3 style="margin-bottom: 5px;">Email:</h3>
    <span>${user_email}</span>
    <h3 style="margin-bottom: 5px;">Subject:</h3>
    <span>${user_subject}</span>
    <h4 style="margin-bottom: 5px;">Message:</h4>
    <span>${user_message}</span>
  </div>
`,
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
