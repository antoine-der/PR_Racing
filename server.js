import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure Nodemailer avec les informations d'Hostinger
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465, // Port sécurisé SSL
  secure: true, // Utilisation de SSL
  auth: {
    user: import.meta.env.EMAIL_USER, // Utilisation de la variable d'environnement
    pass: import.meta.env.EMAIL_PASS, // Utilisation de la variable d'environnement
  },
});

app.post('/send-email', (req, res) => {
  const { fullName, email, message } = req.body;

  // Vérifier si les champs sont correctement remplis
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont obligatoires.' });
  }

  const mailOptions = {
    from: import.meta.env.EMAIL_USER,
    to: import.meta.env.EMAIL_USER, // L'adresse email de destination
    subject: `Nouveau message de ${fullName}`,
    text: `Vous avez reçu un nouveau message de ${fullName} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error); // Loguer l'erreur dans la console
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'e-mail.' }); // Envoyer un statut 500 au client avec un message
    }
    res.status(200).send({ message: 'Email envoyé avec succès !' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur le port ${PORT}`);
});
