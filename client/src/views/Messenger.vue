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
                <router-link to="/messenger" active-class="active-link" class="sidebar__menu-link">
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
      <div>
        <div class="content">
          <div class="content__main messenger">
            <div class="content__header">
              <div class="content__left">
                <router-link to="/">
                  <i class="fas fa-arrow-left arrow-back"></i>
                </router-link>
                <h2 class="title">Мессенджер</h2>
              </div>
              <div class="right">
                <router-link to="/messenger/new">
                  <i class="fas fa-plus plus"></i>
                </router-link>
              </div>
            </div>
            <div class="content__bottom">
              <div class="dialog__list">
                <div class="dialog">
                  <div class="messenger__online">
                    <img src="../assets/default-avatar.png" alt="user-avatar" />
                  </div>
                  <div class="dialog__info">
                    <div class="top">
                      <div class="content__left">
                        <h3>name</h3>
                        <p>@name</p>
                      </div>
                    </div>
                    <p class="last-message">Something</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="content-right messenger">
            <h3>Не выбран диалог</h3>
            <p>Выберите диалог справа или создайте новый</p>
            <router-link to="/messenger/new" class="new-dialog">Новый диалог</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Messenger",
};
</script>

<style>
@import "../assets/styles/pages/feed.css";
@import "../assets/styles/pages/messenger.css";
@import "../assets/styles/elements/dialog.css";
</style>
