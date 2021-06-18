<template>
  <div class="profile-top">
    <div class="profile__avatar">
      <img src="../../assets/default-avatar.png" alt="user-avatar" class="profile-avatar" />
      <span class="online"></span>
    </div>
    <div class="profile__info" v-for="user in users" v-bind:key="user.currentUser.id">
      <div class="profile-container">
        <div class="profile-verify" v-if="user.currentUser.roles === 'admin'">
          <span class="profile-name">{{ user.currentUser.name }}</span>
          <i class="fas fa-check check"></i>
        </div>
        <span class="profile-name" v-else >{{ user.currentUser.name }}</span>
        <i class="fas fa-pen pen"></i>
      </div>
      <span class="profile-nickname">@{{ user.currentUser.username }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ProfileTop",
  data() {
    return {
      users: []
    }
  },
  methods: {
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

<style scoped>

</style>