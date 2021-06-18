import cookies from 'vue-cookies'

export const authenticationGuard = (to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !cookies.get('token')) {
    next('/')
  } else {
    next()
  }
}