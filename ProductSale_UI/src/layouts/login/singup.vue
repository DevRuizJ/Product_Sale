<template>
  <div class="signup-container">
    <div class="signup-card">
      <h1 class="signup-title">Create Account</h1>
      <p class="signup-subtitle">Join us and start shopping today</p>
      <form @submit.prevent="submitForm" class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="submit-button">Sign Up</button>
      </form>
      <p class="signin-link">
        Already have an account? <a href="/signin">Sign In</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'regis_ter',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const username = ref<string>('')
    const email = ref<string>('')
    const password = ref<string>('')
    const confirmPassword = ref<string>('')

    const submitForm = () => {
      if (password.value !== confirmPassword.value) {
        alert('Passwords do not match')
        return
      }

      console.log('Username:', username.value)
      console.log('Email:', email.value)
      console.log('Password:', password.value)
      // Aquí puedo añadir la lógica para manejar el registro de usuario
    }

    return {
      username,
      email,
      password,
      confirmPassword,
      submitForm
    }
  }
})
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/path-to-your-background-image.jpg');
  /* Cambiar la imagen */
  background-size: cover;
  background-position: center;
}

.signup-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.signup-title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.signup-subtitle {
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
}

.signup-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.signin-link {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.signin-link a {
  color: #007bff;
  text-decoration: none;
}

.signin-link a:hover {
  text-decoration: underline;
}
</style>
