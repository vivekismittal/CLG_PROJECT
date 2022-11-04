const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("./../catchAsync");

exports.createNewUser = catchAsync(async (req, res, next) => {
    const sameEmailUser = await User.findOne({ email: req.body.email });
    if (sameEmailUser) {
      return  next(new AppError("User exist with same Email"), 409);
    }
    const sameMobileUser = await User.findOne({ mobile: req.body.mobile });
    if (sameMobileUser) {
       return next(new AppError("User exist with same Mobile"), 409);
    }
  const newUser = await User.create(req.body);
  res.status(201).json({
    status: "sucess",
    results: { newUser },
  });

});


