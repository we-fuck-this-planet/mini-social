<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <div class="sidebar__top">
          <a href="#" class="sidebar-link">
            <img src="" alt="Logo..." class="sidebar-logo" />
          </a>
          <div class="sidebar__menu">
            <ul class="sidebar__menu-ul">
              <li class="sidebar__menu-li">
                <router-link
                  to="/feed"
                  class="sidebar__menu-link"
                  active-class="active-link"
                >
                  <i class="fas fa-home icon"></i>
                  <span>Главная</span>
                </router-link>
              </li>
              <li class="sidebar__menu-li">
                <router-link to="/profile" class="sidebar__menu-link">
                  <i class="fas fa-user icon"></i>
                  <span>Профиль</span>
                </router-link>
                <router-link to="/notification" class="sidebar__menu-icon">
                  <i class="fas fa-bell right-icon"></i>
                </router-link>
              </li>
              <li class="sidebar__menu-li">
                <router-link to="/messenger" class="sidebar__menu-link">
                  <i class="fas fa-comments icon"></i>
                  <span>Мессенджер</span>
                </router-link>
              </li>
              <li class="sidebar__menu-li">
                <router-link to="/friends" class="sidebar__menu-link">
                  <i class="fas fa-users icon"></i>
                  <span>Друзья</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar__bottom">
          <ul class="authors">
            <li class="authors__list">
              <a
                href="https://vk.com/herobrine_vova_world_mistik31"
                class="authors-list"
                >Vova Kotov</a
              >
            </li>
            <li class="authors__list">
              <a href="https://vk.com/alex_developer" class="authors-list"
                >Алексей Сильвейструк</a
              >
            </li>
          </ul>
          <div class="bottom">2021 © fPlanet</div>
        </div>
      </div>
      <div class="content">
        <div class="content__main">
          <div class="content__header">
            <div class="content__title">
              <h2 class="content-title">Уведомления</h2>
            </div>
          </div>
          <div class="content__bottom">
            <!-- <p class="notification-empty">Список уведомлений - пуст</p> -->
            <div class="notifications">
              <div class="notification">
                <i class="fas fa-heart heart"></i>
                <p class="text">
                  Пользователь 
                  <router-link to="user:id"> @name </router-link>
                  <span>поставил лайк на запись <i>«123321..»</i></span>
                  <span class="date">17.06.2021</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="content__right">
          <div class="profile__top">
            <div class="profile">
              <ProfileTop v-bind:users="users" />
            </div>
          </div>
          <div class="profile__stats">
            <ProfileStats />
          </div>
          <div class="profile__information">
            <ProfileInfo />
          </div>
          <ProfileController v-bind:users="users" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileController from "../components/profiles/ProfileController";
import ProfileInfo from "../components/profiles/ProfileInfo";
import ProfileStats from "../components/profiles/ProfileStats";
import ProfileTop from "../components/profiles/ProfileTop";
import axios from "axios";

export default {
  name: "Notification",
  components: {
    ProfileController,
    ProfileInfo,
    ProfileStats,
    ProfileTop,
  },
  data() {
    return {
      users: [],
    };
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

      axios
        .get("/api/users")
        .then((response) => {
          const data = response.data;

          this.user.push(data);
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style>
@import "../assets/styles/pages/feed.css";
@import "../assets/styles/pages/notification.css";
@import "../assets/styles/elements/notification.css";
</style>