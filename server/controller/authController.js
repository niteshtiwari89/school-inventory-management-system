const User = require('../models/user_login');
const createError = require('../utils/appError');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return next(new createError('User already Exist!', 400));

        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });
        const token = jwt.sign({_id:newUser._id}, 'secretkey123', {
            expiresIn:'80d',
        });
        res.status(201).json({
            status: 'success',
            message: 'User register Successfully',
            token,
        })
    }
    catch (error){
        next(error);
    }
};
exports.login = async (req, res, next) => { };