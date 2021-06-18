<template>
  <div id="app">
    <div class="form">
      <div class="form__logo">
        Logo...
      </div>
      <div class="form__text">
        <h2 class="form-title">Создайте учетную запись</h2>
      </div>
      <div class="input-group">
        <label>Имя</label>
        <input type="email" class="input" v-model="name">
      </div>
      <div class="input-group">
        <label>E-mail</label>
        <input type="email" class="input" v-model="email">
      </div>
      <div class="input-group">
        <label>Логин</label>
        <input type="text" class="input" v-model="username">
      </div>
      <div class="input-group">
        <label>Пароль</label>
        <input type="password" class="input" v-model="password">
      </div>
      <div class="input-group">
        <label>Повторите пароль</label>
        <input type="password" class="input" v-model="checkPassword">
      </div>
      <div class="btn-group right">
        <router-link to="/login" class="have-account">У меня есть аккаунт</router-link>
        <router-link to="/" class="btn btn-create">
          <span v-on:click="createAccount">Создать</span>
        </router-link>
      </div>
    </div>
    <div class="bottom-link-police">Политика конфиденциальности</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Registration",
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      checkPassword: ''
    }
  },
  methods: {
    createAccount() {
      if (this.password !== this.checkPassword) {
        return false // TODO: ТУДУШКА
      } else {
        const payload = {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password
        }

        axios.post('/api/registration', payload).then(response => {
          if (response.data.status === 200) {
            console.log(response.data)

            this.$router.push('/login')
          } else {
            console.log(response.data)
            // TODO: Написать кастомную ошибку
          }
        })
      }
    }
  }
}
</script>

<style lang="css">

@import '../assets/styles/pages/form.css';

</style>