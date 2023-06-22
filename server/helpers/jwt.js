const jwt = require("jsonwebtoken");

const signToken = (payload) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
};

const decodeToken = (payload) => {
    return jwt.verify(payload, process.env.SECRET_KEY);
};

module.exports = { signToken, decodeToken };
