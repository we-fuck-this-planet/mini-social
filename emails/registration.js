const keys = require('../Config/default.json')

module.exports = function(email) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: 'Аккаунт создан',
    html: `
      <h1>Добро пожаловать в нашу социалку</h1>
      <p>Вы успешно создали аккаунт c email - ${email}</p>
      <hr />
      <a href="${keys.BASE_URL}">Соц сеть</a>
    `
  }
}