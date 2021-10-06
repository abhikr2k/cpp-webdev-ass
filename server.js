//SG.gevaiQwZR - icnFEdNlbe5Q.HPJVlKtJU2F67jUrxonMYd_H9UL86fRyqnTq2YjN5xk
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');
// const msg = {
//     to: 'abhishekkumarjha.cse19@chitkarauniversity.edu.in',
//     from: 'abhikr2k@gmail.com',
//     subject: 'testing node email service',
//     text: ' this is awsome email sent from node app'

// }


const path = require("path");

const express = require("express");
const app = express();

const sendEmail = require("./utils/sendEmail.js");

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("contact");
});

app.get("/sent", (req, res) => {
    res.render("sent");
});

app.post("/sendemail", (req, res) => {
    const { name, surname, email } = req.body;


    const to = "abhishekkumarjha.cse19@chitkarauniversity.edu.in";
    const from = "abhikr2k@gmail.com";
    const subject = "New Contact Request";

    const output = `
    <p>You have a new Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Surname: ${surname}</li>
      <li>Email: ${email}</li>
    </ul>
  `;

    sendEmail.sendEmail(to, from, subject);
    res.redirect("/sent");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// sgMail.send(msg, function(err, info) {
//     if (err) {

//         console.log("email not sent");

//     } else {
//         console.log("email sent success");
//     }
// });