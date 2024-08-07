const express = require("express");
const { sendEmailToAllUsers } = require("../controllers/dbController");

const router = express.Router();

router.post("/sendBroadcast", sendEmailToAllUsers);

module.exports = router;
