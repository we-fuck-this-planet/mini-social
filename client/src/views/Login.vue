<template>
  <div id="app">
    <div class="form">
      <div class="form__logo">
        Logo...
      </div>
      <div class="form__text">
        <h2 class="form-title">Вход в учетную запись</h2>
      </div>
      <div class="input-group">
        <label>Email</label>
        <input type="email" class="input" v-model="email">
      </div>
      <div class="input-group">
        <label>Пароль</label>
        <input type="password" class="input" v-model="password">
      </div>
      <div class="btn-group">
        <router-link to="/" class="have-account">У меня нет аккаунта</router-link>
        <router-link to="/login" class="btn btn-create">
          <span v-on:click="loginAccount">Войти</span>
        </router-link>
        <div class="right">
          <router-link to="/forget" class="forget-password">Забыли пароль?</router-link>
        </div>
      </div>
    </div>
    <div class="bottom-link-police">Политика конфиденциальности</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginAccount() {
      const payload = {
        email: this.email,
        password: this.password
      }

      axios.post('/api/login', payload).then(response => {
        if (response.data.status === 200) {
          console.log(response.data)

          const payload = {
            token: response.data.token
          }

          this.$store.dispatch('GET_USER', payload)
          this.$router.push('/feed')
        } else {
          console.log(response)
        }
      })
    }
  }
}
</script>

<style>
@import '../assets/styles/pages/form.css';
</style>