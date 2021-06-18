const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../Config/MiddleWareAuth')

module.exports = function (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token === null) {
        return res.json({
            message: 'Майнкрафт',
            status: 403
        })
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.json({
                message: 'Майнкрафт',
                status: 403
            })
        }

        req.user = user
        next()
    })
}