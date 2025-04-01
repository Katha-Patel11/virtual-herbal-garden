import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authToken = req.header("Authorization");

  if (!authToken) {
    return res.status(401).json({ error: "Access Denied.No token provided" });
  }
  const token = authToken.split(" ")[1];
  try {
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
