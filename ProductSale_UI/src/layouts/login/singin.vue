<template>
  <div class="login-container">
    <div class="login-card">
      <h1 class="login-title">Welcome Back</h1>
      <p class="login-subtitle">Please sign in to your account</p>
      <form @submit.prevent="submitForm" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit" class="submit-button">Sign In</button>
      </form>
      <p class="signup-link">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'log_in',
  // eslint-disable-next-line space-before-function-paren
  setup() {
    const router = useRouter()
    const username = ref<string>('')
    const password = ref<string>('')

    const submitForm = () => {
      console.log('Username:', username.value)
      console.log('Password:', password.value)
      // Aquí puedo añadir la lógica para manejar el inicio de sesión
      // Si la autenticación es exitosa, redirijo al usuario a la página deseada
      router.push('/dashboard') // Cambia '/dashboard' por la ruta a la que quiero redirigir
    }

    return {
      username,
      password,
      submitForm
    }
  }
})
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('/path-to-your-background-image.jpg');
  /* Cambia esta ruta a la de tu imagen */
  background-size: cover;
  background-position: center;
}

.login-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-title {
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.login-subtitle {
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
}

.login-form {
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

.signup-link {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
