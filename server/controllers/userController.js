const { checkPassword, hashPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Dashboard } = require("../models");

class UserController {
  static async register(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        age,
        address,
        initialBalance,
      } = req.body;
      const register = await User.create({
        firstName,
        lastName,
        email,
        password,
        address,
        age,
        initialBalance,
        isPaid: false,
      });
      const createDashboard = await Dashboard.create({
        activity: 0,
        profit: 0,
        loss: 0,
        roi: 0,
        profitFreq: 0,
        lossFreq: 0,
        UserId: register.id,
      });
      res.status(201).json({ message: "Successfully Register!" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      console.log("masuk sini");
      const { email, password } = req.body;
      const checkEmail = await User.findOne({
        where: {
          email,
        },
      });
      if (!checkEmail) {
        throw { name: "Invalid email/password" };
      } else {
        const access = checkPassword(checkEmail.password, password);
        if (!access) {
          throw { name: "Invalid email/password" };
        } else {
          const access_token = signToken({ id: checkEmail.id });
          res.status(200).json({
            access_token,
            userInfo: checkEmail,
          });
        }
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async changePassword(req, res, next) {
    try {
      let { currentPassword, newPassword } = req.body;
      if (currentPassword === newPassword) {
        throw { name: "Invalid password input" };
      } else {
        const user = await User.findOne({
          where: {
            id: req.user.id,
          },
        });
        const passValidation = checkPassword(user.password, currentPassword);
        if (!passValidation) {
          throw { name: "Invalid email/password" };
        } else {
          newPassword = hashPassword(newPassword);
          const updatePassword = await User.update(
            {
              password: newPassword,
            },
            {
              where: {
                id: req.user.id,
              },
            }
          );
          res.status(201).json({
            message: "Password changed successfully",
          });
        }
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async changeProfile(req, res, next) {
    try {
      const { firstName, lastName, age, address } = req.body;
      console.log(firstName, lastName, age, address);
      const updateProfile = await User.update(
        {
          firstName,
          lastName,
          age,
          address,
        },
        {
          where: {
            id: req.user.id,
          },
        }
      );
      res.status(201).json({ message: "Profile updated successfully" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = { UserController };
