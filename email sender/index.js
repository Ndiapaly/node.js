const nodemailer = require("nodemailer");

// Créer un transporteur
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre-email@gmail.com", // Remplacez par votre adresse email
    pass: "votre-mot-de-passe", // Remplacez par votre mot de passe
  },
});

// Définir les options de l'email
let mailOptions = {
  from: "votre-email@gmail.com", // Remplacez par votre adresse email
  to: "destinataire@example.com", // Remplacez par l'adresse email du destinataire
  subject: "Test Email",
  text: "Hello from Node.js using Nodemailer!",
};

// Envoyer l'email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
