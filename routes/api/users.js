const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// GET /api/users
router.get('/nominations', usersCtrl.nominations)
// POST /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.post('/nominations/:id', usersCtrl.manageNominations);

module.exports = router;