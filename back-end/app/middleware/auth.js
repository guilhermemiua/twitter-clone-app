const jwt = require("jsonwebtoken");
const auth = require("../../config/auth");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  // Get headers
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  // "Bearer (token)"
  const parts = authHeader.split(" ");
  if (!parts.length === 2) {
    return res.status(401).json({ error: "Token error" });
  }

  const [scheme, token] = parts;

  if (scheme !== "Bearer") {
    return res.status(401).json({ error: "Token error" });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, auth.secret);

    // Give the id to the next route
    req.userId = decoded.id;

    return next();
  } catch (err) {
    return next(err);
  }
};
