<template>
  <div id="app">
    <div class="profile__controller" v-for="user in users" v-bind:key="user.currentUser.id">
      <router-link to="/settings" class="edit-profile">Настройки</router-link>
      <a href="#" class="verify-profile" v-if="user.currentUser.roles === 'user'">Верификация</a>
      <a href="#" v-on:click="logout" class="logout">Выход</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ProfileController",
  data() {
    return {
      users: []
    }
  },
  methods: {
    logout() {
      return axios.get('/api/logout').then(response => {
        console.log(response)

        this.$cookies.set('token', '')
        this.$router.push('/')
      }).catch(e => console.log(e))
    },
    fetchUsers() {
      const token = this.$cookies.get("token");

      axios
        .get("/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const currentUser = response.data;

          if (response.status !== 200 && response.statusText !== "OK") {
            console.log("Проблема с сервером"); // TODO: Написать кастомную ошибку!
          }

          this.users.push({ currentUser });
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.fetchUsers()
  }
}
</script>
