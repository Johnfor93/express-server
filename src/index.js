const express = require("express");

// import all the models
const student = require("./models/student");
const bank = require("./models/bank");
const payment = require("./models/payment");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = express.Router();

router.get("/student", (req, res) => {
  res.send(JSON.stringify(student.getStudent()));
});

router.get("/student/:id", (req, res) => {
  res.send(JSON.stringify(student.filterStudent(req.params.id)));
});

router.get("/student/get/:name", (req, res) => {
  res.send(JSON.stringify(student.getStudentByName(req.params.name)));
});

router.get("/bank", (req, res) => {
  res.send(JSON.stringify(bank.getBank()));
});

router.get("/bank/:id", (req, res) => {
  res.send(JSON.stringify(bank.filterBank(req.params.id)));
});

router.get("/payment", (req, res) => {
  res.send(JSON.stringify(payment.getPayment()));
});

router.get("/payment/:studentid", (req, res) => {
  res.send(JSON.stringify(payment.filterByStudentID(req.param.studentid)));
});

router.post("/payment/create", (req, res) => {
  const reqData = req.body;
  console.log(reqData);
  res.send(JSON.stringify(payment.setPayment(reqData.id, reqData.period, reqData.date, reqData.bank, reqData.amount)));
});

// Set Static File Location
// app.use(express.static(path.join(__dirname, "public")));

// Set POST and make server listen
// const PORT = process.env.PORT || 3000;

app.use(`/.netlify/functions/api`, router);

app.listen();

module.exports = app;
module.exports.handler = serverless(app);
