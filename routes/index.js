const userRouter = require('./user')
const dataRouter = require('./data')
const { notFound, errHandler } = require('../middlewares/errHandler')

const initRoutes = (app) => {
    app.use('/api/user', userRouter)
    app.use('/api/data', dataRouter)

    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes
