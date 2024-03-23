const PersonalProjects = require("../model/personalProjectsModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllPersonalProjects = catchAsync(async (req, res, next) => {
  const personalProjects = await PersonalProjects.find();
  res.status(200).send({
    status: "success",
    data: personalProjects,
  });
});
