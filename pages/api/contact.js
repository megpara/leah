require("dotenv").config();
const PASSWORD = process.env.password;

export default async (req, res) => {
  console.log(req.body);

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "leahlanecookieorders@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "leahlanecookieorders@gmail.com",
    to: "meganparadowski@gmail.com",
    subject: `Cookies by Leah Lane Order!`,
    html: `
    <div><strong>Item:</strong></div>
    <div>${req.body.item}</div>
    <br>
    <div><strong>Quantity:</strong></div>
    <div>${req.body.quantity}</div>
    <br>
    <div><strong>Customization:</strong></div>
    <div>${req.body.customization}</div>
    <br>
    <div><strong>Customer Info:</strong></div>
    <div>${req.body.name}</div>
    <div>${req.body.email}</div>
    <div>${req.body.phone}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: `Oops, something went wrong... Email me at leah05miller@gmail.com to place your order.`,
      });
    } else {
      console.log(info);
      return res.status(201).json({ error: null });
    }
  });
};
