const jwt = require("jsonwebtoken");

const signToken = (payload) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
};

const decodeToken = (payload) => {
    const access = jwt.verify(payload, process.env.SECRET_KEY);
    return access
};

module.exports = { signToken, decodeToken };
