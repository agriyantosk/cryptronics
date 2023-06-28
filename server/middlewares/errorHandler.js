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
        res.status(403).json({ message: "Please login first" });
    } else if (error.name === "Invalid password input") {
        res.status(401).json({
            message: "New password cannot be the same as your current password",
        });
    } else if (error.name === "You already executed this plan") {
        res.status(401).json({ message: "You already executed this plan" });
    } else if (error.name === "You already added to the watchlist") {
        res.status(401).json({ message: "You already added to the watchlist" });
    } else {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { errorHandler };
