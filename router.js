const Router = require('express')
const router = new Router()
const MiddleWareAuth = require('./MiddleWare/MiddleWareAuth')
const User = require('./Models/Users')
const Post = require('./Models/Posts')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const confirmEmail = require('./emails/confirm')
const { SECRET_KEY } = require('./Config/MiddleWareAuth')
const { MAIL, PASSWORD } = require('./Config/AuthEmail')
const bcrypt = require('bcrypt')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: { 
    user: MAIL, 
    pass: PASSWORD 
  }
})

const generateAccessToken = (id, name, roles, email, username) => {
  const payload = { id, name, roles, email, username }

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '24h'
  })
}


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.json({
        message: `Не найден ${email}`,
        status: 400
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
      return res.json({
        message: 'Введен неверный пароль',
        status: 400
      })
    }

    const token = generateAccessToken(user._id, user.name, user.role, user.email, user.username)
    res.cookie('token', token)

    return res.json({ message: 'Успешно!', status: 200, token })
  } catch (e) {
    console.log(e)
  }
})


router.post('/registration', async (req, res) => {
  try {
    const { name, email, username, password } = req.body
    const token = email + Math.random() * 1000
    const hashPassword = bcrypt.hashSync(password, 6)

    const user = new User({ name, email, username, password: hashPassword })
    const currentUser = await User.findOne({ username })
    const currentEmail = await User.findOne({ email })

    if (currentUser) {
      return res.json({
        message: 'Придумайте другой логин!',
        status: 400
      })
    }

    if (currentEmail) {
      return res.json({
        message: `Аккаунт зарегистрирован на данный Email!`,
        status: 400
      })
    }

    await transporter.sendMail(confirmEmail(email, token))
    await user.save()
    return res.json({
      message: 'Аккаунт успешно создан!',
      status: 200
    })
  } catch (e) {
    console.log(e)
  }
})

router.get('/logout', async (req, res) => {
  try {
    res.cookie('token', '')
    return res.json({
      message: 'Вы вышли из аккаунта!',
      status: 200
    })
  } catch (e) {
    console.log(e)
  }
})


router.get('/user', MiddleWareAuth, async (req, res) => {
  try {
    const user = req.user
    return res.json(user)
  } catch (e) {
    console.log(e)
  }
})

router.get('/profile/:_id', async (req, res) => {
  try {
    const user = await User.findById(req.params._id)
    return res.json(user)
  } catch (e) {
    console.log(e)
  }
})

router.put('/profile/:_id/follow', async (req, res) => {
  try {
    if (req.body.id !== req.params._id) {
      const user = await User.findById(req.params._id)
      const currentUser = await User.findById(req.body.id)

      if (!user.followers.includes(req.body.id)) {
        await user.updateOne({ $push: { followers: req.body.id }})
        await currentUser.updateOne({ $push: { followings: req.body.id }})

        return res.json({
          status: 200,
          message: 'Ты подписался'
        })
      } else {
        return res.json({
          status: 500,
          message: 'Ты не можешь ещё раз подписаться'
        })
      }
    } else {
      return res.json({
        status: 500,
        message: 'Ты не можешь на самого себя подписаться'
      })
    }
  } catch (e) {
    console.log(e)
  }
})

router.put('/profile/:_id/unfollow', async (req, res) => {
  try {
    if (req.body.id !== req.params._id) {
      const user = await User.findById(req.params._id)
      const currentUser = await User.findById(req.body.id)

      if (user.followers.includes(req.body.id)) {
        await user.updateOne({ $pull: { followers: req.body.id }})
        await currentUser.updateOne({ $pull: { followings: req.body.id }})

        return res.json({
          status: 200,
          message: 'Ты успешно отписался'
        })
      } else {
        return res.json({
          status: 500,
          message: ''
        })
      }
    }
  } catch (e) {
    console.log(e)
  }
})

router.post('/posts', async (req, res) => {
  try {
    const post = new Post(req.body)
    const posts = await post.save()

    return res.json(posts)
  } catch (e) {
    console.log(e)
  }
})

router.put('/posts/:_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)

    if (post.userId === req.body.userId) {
      await post.update({ $set: req.body })

      return res.json({
        status: 200,
        message: 'Пост обновлен'
      })
    } else {
      return res.json({
        status: 500,
        message: ''
      })
    }
  } catch (e) {
    console.log(e)
  }
})

router.delete('/posts/:_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)

    if (post.userId === req.body.userId) {
      await post.deleteOne()

      return res.json({
        status: 200,
        message: 'Пост удален'
      })
    } else {
      return res.json({
        status: 500,
        message: 'Ты можешь удалить только свой пост'
      })
    }
  } catch (e) {
    console.log(e)
  }
})

router.put('/posts/:_id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)

    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId }})

      return res.json({
        status: 200,
        message: 'Лайк поставлен'
      })
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId }})

      return res.json({
        status: 200,
        message: 'Лайк убран'
      })
    }
  } catch (e) {
    console.log(e)
  }
})

router.get('/posts/:_id', async (req, res) => {
  try {
    const post = await Post.findById(req.params._id)
    return res.json(post)
  } catch (e) {
    console.log(e)
  }
})

router.get('/users', async (req, res) => {
  try {
    const user = await User.find()
    return res.json(user)
  } catch (e) {
    console.log(e)
  }
})

router.get('/posts', async (req, res) => {
  try {
    const post = await Post.find()
    return res.json(post)
  } catch (e) {
    console.log(e)
  }
})


module.exports = router