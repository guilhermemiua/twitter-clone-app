const Tweet = require("../model/Tweet");

module.exports = {
  async create(req, res, next) {
    try {
      const tweet = await Tweet.create({ ...req.body, user: req.userId });

      return res.json(tweet);
    } catch (err) {
      return next(err);
    }
  },
  async destroy(req, res, next) {
    try {
      await Tweet.findByIdAndRemove(req.params.id);

      return res.send();
    } catch (err) {
      return next(err);
    }
  },
  async find(req, res, next) {
    try {
      const tweets = await Tweet.find().sort('-createdAt');

      return res.json(tweets);
    }
    catch(err) {
      return next(err);
    }
  }
};
