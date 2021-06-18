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
              <i class="fas fa-arrow-left arrow-back"></i>
              <h2 class="content-title">@{{ user.username }}</h2>
            </div>
          </div>
          <div class="content__bottom">
            <p class="post-notify">
              Этот пользователь пока не публиковал никаких постов
            </p>
          </div>
        </div>
        <div class="content__right">
          <div class="profile__top">
            <div class="profile">
              <UserProfileTop />
            </div>
          </div>
          <div class="profile__stats">
            <ProfileStats />
          </div>
          <div class="profile__information">
            <ProfileInfo />
          </div>
          <UserProfileController />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserProfileTop from "../components/profiles/UserProfileTop";
import ProfileStats from "../components/profiles/ProfileStats";
import ProfileInfo from "../components/profiles/ProfileInfo";
import UserProfileController from "../components/profiles/UserProfileController";

export default {
  name: "UserProfile",
  components: {
    UserProfileController,
    ProfileInfo,
    ProfileStats,
    UserProfileTop,
  },
  data() {
    return {
      user: [],
    };
  },
  computed: {
    GET_USER() {
      return {
        data: this.$store.state,
      };
    },
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
};
</script>

<style>
@import "../assets/styles/pages/feed.css";
@import "../assets/styles/elements/UserProfile.css";
</style>