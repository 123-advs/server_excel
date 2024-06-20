const router = require('express').Router()
const ctrls = require('../controllers/data')
const { verifyAccessToken } = require('../middlewares/verifyToken')

router.post('/', verifyAccessToken, ctrls.createData)
router.get('/databyuser/:userId', verifyAccessToken, ctrls.getDataByUserId);
router.delete('/:dataId', verifyAccessToken, ctrls.deleteData);

module.exports = router

// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETE
//CREATE (POST) + PUT - body
//GET + DELETE - query 
