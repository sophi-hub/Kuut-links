const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.get("/", (req, res) => res.render("index", { shortUrl: null }));
router.post("/shorten", urlController.shortenUrl);
router.get("/:shortId", urlController.redirectUrl);

module.exports = router;
