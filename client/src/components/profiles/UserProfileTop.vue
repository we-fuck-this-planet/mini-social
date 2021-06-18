<template>
  <div class="profile-top">
    <div class="profile__avatar">
      <img src="../../assets/default-avatar.png" alt="user-avatar" class="profile-avatar" />
      <span class="online"></span>
    </div>
    <div class="profile__info">
      <div class="profile-container">
        <div class="profile-verify" v-if="user.role === 'admin'">
          <span class="profile-name">{{ user.name }}</span>
          <i class="fas fa-check check"></i>
        </div>
        <span class="profile-name" v-else >{{ user.name }}</span>
        <i class="fas fa-pen pen"></i>
      </div>
      <span class="profile-nickname">@{{ user.username }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ProfileTop",
  data() {
    return {
      user: []
    }
  },
  created() {
    return axios.get("/api/users").then((response) => {
      response.data.map((data) => {
        console.log(data);

        data = new Array(data);
        const user = data.find((user) => user._id == this.$route.params.id);

        if (user) {
          this.user = user;
        }
      });
    });
  }
}
</script>

<style scoped>

</style>