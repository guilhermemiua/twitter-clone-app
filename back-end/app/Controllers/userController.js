const User = require("../model/User");

module.exports = {
  async update(req, res, next) {
    try {
      const id = req.userId;

      const { password, confirmPassword, name, username } = req.body;

      // Verifies if password was passed in body
      if (password && password !== confirmPassword) {
        return res.status(400).json({ error: "Password doesn't match" });
      }

      // Return to the 'user' the new values
      const user = await User.findByIdAndUpdate(
        id,
        { name, username },
        { new: true }
      );

      // Update password, using save to activate the method of user model
      if (password) {
        user.password = password;
        await user.save();
      }

      return res.json(user);
    } catch (err) {
      return next();
    }
  }
};
