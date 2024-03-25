const express = require("express");
const cors = require("cors");

const app = express();
const experienceRouter = require("./Routes/experienceRouter");
const companyProjectsRouter = require("./Routes/companyProjectsRouter");
const personalProjectsRouter = require("./Routes/personalProjectsRouter");
const resumeRouter = require("./Routes/resumeRouter");

app.use(cors());
app.options("*", cors());

app.use("/v1/experiences", experienceRouter);
app.use("/v1/companyProjects", companyProjectsRouter);
app.use("/v1/personalProjects", personalProjectsRouter);
app.use("/v1/resume", resumeRouter);

module.exports = app;
