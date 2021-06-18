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
                <router-link to="/feed" class="sidebar__menu-link" active-class="active-link">
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
              <h2 class="content-title">Новости</h2>
            </div>
          </div>
          <div class="content__bottom">
            <div class="articles" v-for="(item, index) in posts" v-bind:key="index">
              <div class="article" v-for="post in item" v-bind:key="post._id">
                <div class="article__top">
                  <a href="#">
                    <div class="article__avatar-owner">
                      <img src="../assets/default-avatar.png" alt="avatar">
                      <span class="online"></span>
                    </div>
                    <h4>UserName</h4>
                  </a>
                  <div class="article__date">
                    <p>{{ post.createdAt }}</p>
                    <div class="article__controller">
                      <i class="fas fa-ellipsis-h"></i>
                    </div>
                  </div>
                </div>
                <div class="article__body">
                  <span>{{ post.text }}</span>
                </div>
                <div class="article__bottom">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fas fa-heart"></i>
                        <span>0</span>
                      </a>
                    </li>
                  </ul>
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
  import axios from 'axios'
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
        users: [],
        user: [],
        posts: [],
        selectedItem: null
      }
    },
    methods: {
      fetchUsers() {
        const token = this.$cookies.get('token')

        axios.get('/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          console.log(response.data)
          const currentUser = response.data

          if (response.status !== 200 && response.statusText !== 'OK') {
            console.log('Проблема с сервером') // TODO: Написать кастомную ошибку!
          }

          this.users.push({ currentUser })
        }).catch(e => console.log(e))

         axios.get('/api/users').then(response => {
          const data = response.data

          this.user.push(data)
        }).catch(e => console.log(e))
      },
      fetchPosts() {
        axios.get('/api/posts').then(response => {
          const data = response.data

          this.posts.push(data)

          console.log(this.posts)
        }).catch(e => console.log(e))
      },
      clickOnUser(index) {
        this.selectedItem = this.$route.params.id = index

        console.log(this.selectedItem)
      }
    },
    mounted() {
      this.fetchUsers()
      this.fetchPosts()
    }
  }
</script>

<style>
@import '../assets/styles/pages/feed.css';
@import '../assets/styles/elements/posts.css';
</style>