const payment = [
  {
    id: "1",
    studentID: "1",
    payment: 200000,
    period: "Jul 2023",
    date: "2 Jul 2023",
    bankCode: "BCA1",
  },
  {
    id: "2",
    studentID: "1",
    payment: 200000,
    period: "Agt 2023",
    date: "2 Jul 2023",
    bankCode: "BCA1",
  },
  {
    id: "3",
    studentID: "2",
    payment: 300000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "4",
    studentID: "3",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "5",
    studentID: "3",
    payment: 200000,
    period: "Agt 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "6",
    studentID: "4",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "7",
    studentID: "5",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "8",
    studentID: "6",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "9",
    studentID: "7",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "10",
    studentID: "8",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "11",
    studentID: "9",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
  {
    id: "12",
    studentID: "10",
    payment: 200000,
    period: "Jul 2023",
    date: "3 Jul 2023",
    bankCode: "BCA2",
  },
];

const student = require("./student");
const bank = require("./bank");

const MAX_DATA = 10000000;

const getPayment = () => {
  let data = payment.map((item) => {
    return {
      pembayaran: item,
      student: student.filterStudent(item.studentID),
      bank: bank.filterBank(item.bankCode),
    };
  });
  return data;
};

const filterPayment = (id) => {
  return payment.filter((item) => {
    return item.id === id;
  });
};

const filterByStudentID = (studentID) => {
  return payment.filter((item) => {
    return item.studentID === studentID;
  });
};

const checkPayment = (studentID, period) => {
  return payment.filter((item) => {
    return item.studentID === studentID && item.period === period;
  }).length != 0
    ? true
    : false;
};

const setPayment = (studentID, period, date, codeBank, amount) => {
  if (checkPayment(studentID, period)) {
    console.log("Masuk");
    return {
      error: "Error",
      message: "Pembayaran telah dilakukan",
    };
  }

  let newPayment = {
    id: "" + Math.floor(Math.random() * MAX_DATA),
    studentID: "" + studentID,
    payment: amount,
    period: period,
    date: date,
    bankCode: codeBank,
  };

  payment.push(newPayment);

  return {
    success: true,
    message: "Data telah tersimpan",
    data: {
      payment: newPayment,
      student: student.filterStudent(newPayment.studentID),
      bank: bank.filterBank(newPayment.bankCode),
    },
  };
};

module.exports = { getPayment, filterByStudentID, filterPayment, setPayment };
