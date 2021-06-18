import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  state: {
    users: []
  },
  mutations: {
    SET_USER_TO_STATE(state, users) {
      state.users = users
    }
  },
  actions: {
    GET_USER({ commit }) {
      const token = cookies.get('token')

      return axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(users => {
        commit('SET_USER_TO_STATE', users)

        return users
      }).catch(e => console.log(e))
    }
  },
  getters: {
    USERS(state) {
      return state.users
    }
  }
}