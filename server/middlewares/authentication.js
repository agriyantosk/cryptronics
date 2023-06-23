const { decodeToken } = require("../helpers/jwt");
const { User } = require("../models");

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        const verifyToken = decodeToken(access_token);
        if (!verifyToken) {
            throw { name: "Invalid token" };
        } else {
            const user = await User.findOne({
                where: {
                    id: verifyToken.id,
                },
            });
            if (!user) {
                throw { name: "Invalid token" };
            } else {
                req.user = { id: user.id };
                next();
            }
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { authentication };
