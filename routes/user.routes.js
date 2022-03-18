const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.post("/send", userController.Send);

module.exports = router;