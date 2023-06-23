const errorHandler = (error, req, res, next) => {
    if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        res.status(400).json({
            message: `Please check your input`,
        });
    } else if (error.name === "Invalid email/password") {
        res.status(400).json({ message: "Invalid email/password" });
    } else if (error.name === "Invalid token") {
        res.status(403).json({message: "Please login first"})
    } else {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { errorHandler };
