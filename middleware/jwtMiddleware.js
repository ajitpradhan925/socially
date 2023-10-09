const { verifyToken } = require("../utils");

const jwtVerify = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
        return res.status(401).json({ message: 'No token provided' });
      }


    console.log({bearerToken});
    let token = bearerToken.split("Bearer")[1].trim();
    console.log({token});
 
      let decoded = verifyToken(token)
      if (!decoded) {
        return res.status(403).json({ message: 'Failed to authenticate token' });
      }
      req.user = decoded;
      next();
}

module.exports = jwtVerify;