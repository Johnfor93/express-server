const murid = [
  {
    id: "1",
    name: "Doni",
    lokasi: "Lokasi 1",
    kelas: "7.1",
  },
  {
    id: "2",
    name: "Gita",
    lokasi: "Lokasi 2",
    kelas: "7.3",
  },
  {
    id: "3",
    name: "Arnold",
    lokasi: "Lokasi 3",
    kelas: "7.2",
  },
  {
    id: "4",
    name: "Jeremy",
    lokasi: "Lokasi 4",
    kelas: "7.3",
  },
  {
    id: "5",
    name: "Grace",
    lokasi: "Lokasi 5",
    kelas: "7.3",
  },
  {
    id: "6",
    name: "Philip",
    lokasi: "Lokasi 6",
    kelas: "7.2",
  },
  {
    id: "7",
    name: "David",
    lokasi: "Lokasi 7",
    kelas: "7.1",
  },
  {
    id: "8",
    name: "Ester",
    lokasi: "Lokasi 8",
    kelas: "7.3",
  },
  {
    id: "9",
    name: "Ruth",
    lokasi: "Lokasi 9",
    kelas: "7.2",
  },
  {
    id: "10",
    name: "Bagas",
    lokasi: "Lokasi 10",
    kelas: "7.1",
  },
];

const getStudent = () => {
  return murid;
};

const filterStudent = (id) => {
  return murid.filter((item) => {
    return item.id === id;
  });
};

const getStudentByName = (name) => {
  return murid.filter((item) => {
    return item.name.includes(name);
  });
};

module.exports = { getStudent, filterStudent, getStudentByName };
