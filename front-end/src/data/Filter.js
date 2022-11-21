import Categories from "./Categories";

const Filters = [
  {
    id: 0,
    name: "Sắp xếp",
    value: [
      "Phù hợp nhất",
      "Rẻ nhất",
      "Đắt nhất",
      "Xếp hạng",
      "Tên",
      "Phổ biến nhất",
      "Chiều rộng",
      "Chiều cao",
      "Chiều sâu",
      "Chiều dài",
    ],
  },
  {
    id: 1,
    name: "Kích thước",
    value: [
      {
        id: 0,
        name: "Chiều rộng",
        minimum: 0,
        maximum: 80,
      },
      {
        id: 1,
        name: "Chiều cao",
        minimum: 0,
        maximum: 40,
      },
      {
        id: 2,
        name: "Chiều sâu",
        minimum: 0,
        maximum: 20,
      },
      {
        id: 3,
        name: "Chiều dài",
        minimum: 0,
        maximum: 80,
      },
    ],
  },
  {
    id: 2,
    name: "Màu sắc",
    value: [
      "White",
      "Gray",
      "Brown",
      "Beige",
      "Black",
      "Green",
      "Blue",
      "Red",
      "Yellow",
      "Pink",
      "Orange",
      "Purple",
    ],
  },
  {
    id: 3,
    name: "Còn hàng",
    value: false,
  },
  {
    id: 4,
    name: "Giá",
    value: { minimum: 0.0, maximum: 400.0 },
  },
  {
    id: 5,
    name: "Thể loại",
    value: Categories,
  },
  {
    id: 6,
    name: "Chất liệu",
    value: [
      "Gỗ",
      "Than củi",
      "Kim loại",
      "Vải",
      "Gỗ veneer",
      "Thủy tinh",
      "Nhựa",
      "Cotton",
      "Da",
      "Gốm sứ",
      "Tre",
      "Giấy",
    ],
  },
];

export default Filters;
