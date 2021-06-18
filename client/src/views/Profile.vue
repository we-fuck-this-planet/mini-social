<template>
  <div id="app">
    <div class="main">
      <div class="sidebar">
        <div class="sidebar__top">
          <a href="#" class="sidebar-link">
            <img src="" alt="Logo..." class="sidebar-logo">
          </a>
          <div class="sidebar__menu">
            <ul class="sidebar__menu-ul">
              <li class="sidebar__menu-li">
                <router-link to="/feed" class="sidebar__menu-link">
                  <i class="fas fa-home icon"></i>
                  <span>Главная</span>
                </router-link>
              </li>
              <li class="sidebar__menu-li">
                <router-link to="/profile" class="sidebar__menu-link" active-class="active-link">
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
              <a href="https://vk.com/herobrine_vova_world_mistik31" class="authors-list">Vova Kotov</a>
            </li>
            <li class="authors__list">
              <a href="https://vk.com/alex_developer" class="authors-list">Алексей Сильвейструк</a>
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
              <h2 class="content-title">Профиль</h2>
            </div>
          </div>
          <div class="content__bottom">
            <div class="create__article">
              <div class="create__top">
                <img src="../assets/default-avatar.png" alt="user avatar">
                <textarea placeholder="О чем расскажешь?" maxlength="255" style="resize: none; height: 70px; overflow: hidden;" v-model="text"></textarea>
              </div>
              <div class="create__center">
                <p>{{ text.length }}/255</p>
              </div>
              <div class="create__bottom">
                <button class="btn-create">
                  <span class="create">Запостить</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="content__right">
          <div class="profile__top">
            <div class="profile">
              <ProfileTop />
            </div>
          </div>
          <div class="profile__stats">
            <ProfileStats />
          </div>
          <div class="profile__information">
            <ProfileInfo />
          </div>
          <ProfileController />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileTop from '../components/profiles/ProfileTop'
import ProfileStats from '../components/profiles/ProfileStats'
import ProfileInfo from '../components/profiles/ProfileInfo'
import ProfileController from '../components/profiles/ProfileController'

export default {
  name: "Feed",
  components: {
    ProfileController, ProfileInfo,
    ProfileStats, ProfileTop
  },
  data() {
    return {
      posts: [],
      index: 0,
      text: ''
    }
  },
  computed: {
    GET_USER () {
      return {
        USER_INFO: {
          name: this.$store.getters.USERS.data.name,
          roles: this.$store.getters.USERS.data.roles,
          email: this.$store.getters.USERS.data.email,
          username: this.$store.getters.USERS.data.username
        }
      }
    }
  },
}
</script>

<style>
  @import '../assets/styles/pages/feed.css';
  @import '../assets/styles/elements/posts.css';
</style>