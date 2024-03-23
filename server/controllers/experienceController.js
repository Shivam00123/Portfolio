const Experience = require("../model/experienceModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllExperience = catchAsync(async (req, res, next) => {
  const experiences = await Experience.find();
  res.status(200).send({
    status: "success",
    data: experiences,
  });
});
