const urls = new Map(); 

const createShortUrl = async (originalUrl) => {
  const { nanoid } = await import("nanoid");
  const shortId = nanoid(6);
  urls.set(shortId, originalUrl);
  return shortId;
};

const getOriginalUrl = (shortId) => urls.get(shortId);

module.exports = { createShortUrl, getOriginalUrl };
