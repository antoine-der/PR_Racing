<template>
  <div class="container-actualite">
    <div class="overlay-actualite">
      <h2>CONTACT</h2>
    </div>
  </div>
  <div class="contact-us-container">
    <div class="contact-us">
      <div class="image-container">
        <img src="../assets/pr_racing14.jpg"/>
      </div>

      <div class="form-container">
        <h1>Contact Us</h1>
        <form @submit.prevent="sendEmail">
          <div class="input-group">
            <input
              type="text"
              v-model="form.fullName"
              id="fullName"
              placeholder="Nom / Prénom"
              required
            />
          </div>

          <div class="input-group">
            <input
              type="email"
              v-model="form.email"
              id="email"
              placeholder="E-mail"
              required
            />
          </div>

          <div class="input-group">
            <textarea
              v-model="form.message"
              id="message"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-submit">CONTACTEZ-NOUS</button>
        </form>
        <p v-if="statusMessage">{{ statusMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        message: '',
      },
      statusMessage: '',
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        from_name: this.form.fullName,
        reply_to: this.form.email,
        message: this.form.message,
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID, // Remplacez par votre service ID
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Remplacez par votre template ID
          templateParams,
          import.meta.env.VITE_EMAILJS_USER_ID // Remplacez par votre user ID fourni par EmailJS
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            this.statusMessage = 'Votre message a été envoyé avec succès !';
          },
          (error) => {
            console.log('FAILED...', error);
            this.statusMessage = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
          }
        );
    },
  },
};
</script>

<style scoped>
.container-actualite {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.overlay-actualite {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url("../assets/pr_racing7.jpg") center/cover no-repeat;
  width: 100%;
  height: 800px;
  padding: 20px;
}

.overlay-actualite h2 {
  margin: 0px;
  font-size: clamp(15px, 3vw, 112px);
  color: white;
}

@media (max-width: 1440px) {
  .overlay-actualite {
    height: 700px;
  }
}

@media (max-width: 1024px) {
  .overlay-actualite {
    height: 500px;
  }
}

@media (max-width: 834px) {
}

@media (max-width: 768px) {
  .overlay-actualite {
    height: 500px;
  }
}

@media (max-width: 480px) {
  .overlay-actualite {
    height: 200px;
    justify-content: flex-end;
  }
}

@media (max-width: 400px) {
  .overlay-actualite {
    height: 200px;
  }
}

.contact-us-container {
  display: flex;
  justify-content: center;
  padding: 40px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  background-color: #f7f5f2;
}

.contact-us {
  display: flex;
  max-width: 1000px;
  width: 100%;
  background-color: #f7f5f2;
  padding: 40px;
}

.image-container {
  flex: 1;
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.form-container {
  flex: 1;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #000;
}

.input-group {
  margin-bottom: 25px;
}

input,
textarea {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  font-size: 16px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

input:focus,
textarea:focus {
  outline: none;
  border-bottom: 2px solid #000;
}

textarea {
  height: 100px;
  resize: none;
}

.btn-submit {
  background-color: #000;
  color: #fff;
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.btn-submit:hover {
  background-color: #333;
}

.contact-info {
  margin-top: 40px;
  font-size: 16px;
}

.contact-info p {
  margin: 5px 0;
  color: #000;
}

.contact-info a {
  color: #000;
  text-decoration: none;
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  margin-right: 15px;
  color: black;
  text-decoration: none;
  font-size: 24px;
}

.social-icons i {
  font-size: 24px;
}
</style>
