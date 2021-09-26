// You must define 12 products of your choice from at least 4 different categories.
const products = [
  {
    _id: "1",
    productName: "Back Scrather",
    category: "Cool Gagets",
    numberInStock: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    liked: true,
  },
  {
    _id: "2",
    productName: "Rtx 3080",
    category: "Computer hardware",
    numberInStock: 0,
    imgUrl:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    liked: true,
  },
  {
    _id: "3",
    productName: "Rano v2",
    category: "Accessories & Supplies",
    numberInStock: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    liked: false,
  },
  {
    _id: "4",
    productName: "Rano v5",
    category: "Camera & Photo",
    numberInStock: 4,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: true,
  },
  {
    _id: "5",
    productName: "Yamha dd5",
    category: "Office Electronics",
    numberInStock: 2,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "6",
    productName: "Rolls royls",
    category: "Office Electronics",
    numberInStock: 6,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "7",
    productName: "GTX 5",
    category: "Office Electronics",
    numberInStock: 1,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "8",
    productName: "BMW 5",
    category: "Office Electronics",
    numberInStock: 8,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "9",
    productName: "Tata nano de1",
    category: "Craft",
    numberInStock: 11,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: true,
  },
  {
    _id: "10",
    productName: "Rolls royls",
    category: "Craft",
    numberInStock: 12,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "11",
    productName: "Corolla 5",
    category: "Craft",
    numberInStock: 15,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
  {
    _id: "12",
    productName: "Lamborgini",
    category: "Computer Storage",
    numberInStock: 10,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1e4c8uWgsz5Hji-FXQ2loIBaxxExYY-Fnmg&usqp=CAU",
    liked: false,
  },
];
export function getProducts() {
  return products;
}
export function getProduct(id) {
  return products.find((m) => m._id === id);
}
