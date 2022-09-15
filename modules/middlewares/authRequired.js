const jwt = require("jsonwebtoken");

exports.authRequired = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(402).json({error: "Please login to use this platform"})
    }

    const token = authorization.split(" ")[1]
    if (!token) {
    return res.token(402).json({error: "login to use platform"})
    }

    const user = jwt.verify(token, "21a26fdba6bbfd5e4df32024dabd48dc2c1d3764ac21ed1bc8df41ee2603b381");
    
    req.user = user;

    console.log(user);
    
    next();
}