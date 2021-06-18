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
                <router-link
                  to="/friends"
                  active-class="active-link"
                  class="sidebar__menu-link"
                >
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
            <div class="content__left">
              <router-link to="/">
                <i class="fas fa-arrow-left arrow-back"></i>
              </router-link>
              <h2 class="title">Настройки аккаунта</h2>
            </div>
          </div>
          <div class="content__bottom">
            <div class="user__settings">
              <h4>Основная информация</h4>
              <div class="form__group-double">
                <div class="input-group">
                  <label for="name">Ваше имя</label>
                  <input type="text" id="name">
                </div>
                <div class="input-group login-field">
                  <label for="login">Логин</label>
                  <input type="text" id="login">
                </div>
              </div>
              <div class="email">
                <div class="input-group">
                <label for="email">E-mail</label>
                <input type="text" id="email">
              </div>
              </div>
              <h4>Безопасность</h4>
              <div class="form__group-double">
                <div class="input-group">
                  <label for="password">Пароль</label>
                  <input type="password" id="password">
                </div>
                <div class="input-group">
                  <label for="password__confirm">Подтверждение</label>
                  <input type="password" id="password__confirm">
                </div>
              </div>
              <div class="btn-right">
                <a href="#" class="btn">
                  <span>Сохранить</span>
                </a>
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
import axios from "axios";
import ProfileTop from "../components/profiles/ProfileTop";
import ProfileStats from "../components/profiles/ProfileStats";
import ProfileInfo from "../components/profiles/ProfileInfo";
import ProfileController from "../components/profiles/ProfileController";

export default {
  name: "Friends",
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
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style>
@import "../assets/styles/pages/feed.css";
@import '../assets/styles/pages/settings.css';
</style>
