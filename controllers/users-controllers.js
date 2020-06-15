const uuid = require("uuid/v4");
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({}, "-password");
    } catch (err) {
        const error = new HttpError(
            "Fetching users failed, please try again later.",
            500
        );
        return next(error);
    }
    res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const getUsersById = async (req, res, next) => {
    const userId = req.params.uid; //{ uid: 'u1'}

    let users;

    try {
        users = await User.findById(userId);
    } catch (err) {
        const error = new HttpError(
            "Something went wrong, could not find a recipe",
            500
        );
        return next(error);
    }

    //error handling if wrong url
    if (!users) {
        const error = new HttpError(
            "Could not find recipe for the provided id",
            404
        );
        return next(error);
    }

    res.json({ users: users.toObject({ getters: true }) }); //same as {recipe: recipe}
};

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
            new HttpError("Invalid inputs passed, please check your data.", 422)
        );
    }

    const { name, email, password } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError(
            "User exists already, please login instead.",
            422
        );
        return next(error);
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError(
            "Could not create user, please try again.",
            500
        );
        return next(error);
    }

    const createdUser = new User({
        name,
        email,
        image: req.file.path,
        password: hashedPassword,
        recipes: [],
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: createdUser.id, email: createdUser.email },
            // 'supersecret_dont_share',
            process.env.JWT_KEY,
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new HttpError(
            "Signing up failed, please try again later.",
            500
        );
        return next(error);
    }

    res.status(201).json({
        userId: createdUser.id,
        email: createdUser.email,
        token: token,
    });

    // const errors = validationResult(req);
    // if(!errors.isEmpty()) {
    //     // console.log(errors);
    //     return next(
    //         new HttpError('Invalid inputs passed, please check your data', 422)
    //     );
    // }

    // const {
    //     // id: uuid(),
    //     name,
    //     // username,
    //     email,
    //     password,
    //     // profileImage,
    //     // numPoints,
    //     // numFollowers,
    //     // location,
    //     // bio,
    //     // recipes
    // } = req.body;

    // let existingUser;
    // try {
    //     existingUser = await User.findOne({email: email});
    // } catch (err) {
    //     const error = new HttpError(
    //         'Signing up failed, please try again later. ', 500
    //     );
    //     return next(error);
    // }

    // if(existingUser) {
    //     const error = new HttpError (
    //         'User exists already, please login instead', 422
    //     );
    //     return next(error);
    // }

    // // DUMMY_USERS.push(createdUser);

    // let hashedPassword;
    // try {
    //     hashedPassword = await bcrypt.hash(password, 12);
    //     } catch (err) {
    //         const error = new HttpError(
    //         'Could not create user, please try again.',
    //         500
    //     );
    //     return next(error);
    // }

    // const createdUser = new User({
    //     // id: uuid(),
    //     name,
    //     // username,
    //     email,
    //     password: hashedPassword,
    //     // profileImage,
    //     // numPoints:,
    //     // numFollowers,
    //     // location,
    //     // bio,
    //     recipes: []
    // });

    // //save user
    // try {
    //     await createdUser.save();
    // } catch (err) {
    //     const error = new HttpError(
    //         'Signing up failed, please try again later. ', 500
    //     );
    //     return next(error);
    // }

    // let token;
    // try {
    //   token = jwt.sign(
    //     { userId: createdUser.id, email: createdUser.email },
    //     'supersecret_dont_share',
    //     { expiresIn: '1h' }
    //   );
    // } catch (err) {
    //   const error = new HttpError(
    //     'Signing up failed, please try again later.',
    //     500
    //   );
    //   return next(error);
    // }

    // // res.status(201).json({user: createdUser.toObject({getters: true})});
    // res
    // .status(201)
    // .json({ userId: createdUser.id, email: createdUser.email, token: token });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;

    console.log(req.body);

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError(
            "Logging in failed, please try again later. ",
            500
        );
        return next(error);
    }

    if (!existingUser) {
        const error = new HttpError(
            "Invalid credentials, could not log you in.",
            401
        );
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        const error = new HttpError(
            "Could not log you in, please check your credentials and try again",
            401
        );
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError(
            "Could not log you in, please check your credentials and try again",
            401
        );
        return next(error);
    }

    let token;
    try {
        token = jwt.sign(
            { userId: existingUser.id, email: existingUser.email },
            // 'supersecret_dont_share',
            process.env.JWT_KEY,
            { expiresIn: 36000000 }
        );
    } catch (err) {
        const error = new HttpError(
            "Logging in failed, please try again later.",
            500
        );
        return next(error);
    }

    res.json({
        userId: existingUser.id,
        email: existingUser.email,
        token: token,
    });

    // res.json({message: 'Logged in', user: existingUser.toObject({getters: true})});
};

const updateUser = (req, res, next) => {
    const { username, location, bio } = req.body;
    const userId = req.params.uid;

    const updatedUser = { ...DUMMY_USERS.find((u) => u.id === userId) };
    const userIndex = DUMMY_USERS.findIndex((u) => u.id === userId);
    updatedUser.username = username;
    updatedUser.location = location;
    updatedUser.bio = bio;

    DUMMY_USERS[userIndex] = updatedUser;

    res.status(200).json({ user: updatedUser });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
exports.updateUser = updateUser;
exports.getUsersById = getUsersById;
