const bank = [
  {
    kodeBank: "BCA1",
    namaBank: "BCA",
    nomorRekening: "0231421412",
  },
  {
    kodeBank: "BCA2",
    namaBank: "BCA",
    nomorRekening: "335325233",
  },
];

const getBank = () => {
  return bank;
};

const filterBank = (kodeBank) => {
  return bank.filter((item) => {
    return item.kodeBank === kodeBank;
  });
};

module.exports = { getBank, filterBank };
