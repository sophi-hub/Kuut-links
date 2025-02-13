const urlModel = require("../models/urlModel");

exports.shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;
  if (!originalUrl) return res.status(400).send("URL inválida");

  const shortId = await urlModel.createShortUrl(originalUrl);
  res.render("index", {
    shortUrl: `${req.protocol}://${req.get("host")}/${shortId}`,
  });
};

exports.redirectUrl = (req, res) => {
  const originalUrl = urlModel.getOriginalUrl(req.params.shortId);
  if (!originalUrl) return res.status(404).send("URL não encontrada");

  res.redirect(originalUrl);
};
