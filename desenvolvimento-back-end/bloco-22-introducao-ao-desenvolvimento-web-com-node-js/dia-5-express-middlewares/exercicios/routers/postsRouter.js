const authPost = require("../middlewares/authPost");
const posts = require('../posts');

const router = require("express").Router();

router.get('/', (req, res) => res.status(200).json(posts));

router.get("/:id", authPost, (req, res) => res.status(200).json(posts));

module.exports = router;
