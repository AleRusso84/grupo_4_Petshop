const express = require('express');
const router = express.Router();
const lastProductApiController = require("../../controllers/api/lastProductAPIController");

router.get('/', lastProductApiController.list);

module.exports = router;