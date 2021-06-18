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
                  to="/follows"
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
              <div class="search">
                <a href="#" class="search-icon">
                  <i class="fas fa-search icon-search"></i>
                </a>
                <input
                  type="text"
                  placeholder="Поиск друзей"
                  class="search-input"
                />
              </div>
            </div>
          </div>
          <div class="content-bottom">
            <ul class="friends__type">
              <li class="friends__type-list">
                <router-link
                  to="/friends/search"
                  class="item"
                  active-class="active-item"
                  >Поиск</router-link
                >
              </li>
              <li class="friends__type-list">
                <router-link to="/friends" class="item">Подписчики</router-link>
              </li>
              <li class="friends__type-list">
                <router-link to="/follows" class="item">Подписки</router-link>
              </li>
            </ul>
            <!-- <p class="friends-notify">Для поиска воспользуйтесь формой выше</p>  Показывать только, если список пуст и инпут не пустой  --> 
            <div class="user__list">
              <div class="user">
                <div class="followers__avatar">
                  <img src="../assets/default-avatar.png" alt="user-avatar" />
                </div>
                <div class="user__info">
                  <div>
                    <h3 class="user-name">
                      <span>Имя</span>
                      <!-- Сюда можно добавить код с галочкой -->
                    </h3>
                    <p class="user-login">@login</p>
                  </div>
                  <a href="#" class="add-btn">Подписаться</a>
                </div>
              </div>
              <div class="user">
                <div class="followers__avatar">
                  <img src="../assets/default-avatar.png" alt="user-avatar" />
                </div>
                <div class="user__info">
                  <div>
                    <h3 class="user-name">
                      <span>Имя</span>
                      <!-- Сюда можно добавить код с галочкой -->
                    </h3>
                    <p class="user-login">@login</p>
                  </div>
                  <a href="#" class="add-btn">Подписаться</a>
                </div>
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
@import "../assets/styles/pages/friends.css";
@import "../assets/styles/pages/FriendsSearch.css";
@import "../assets/styles/elements/UserLists.css";
</style>
