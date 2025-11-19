// src/data/products.ts (หรือ src/Product.tsx)

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "กระเป๋า",
    price: 390,
    category: "กระเป๋า",
    img: "/product/BLACKMORAL.jpg",
  },
  {
    id: 2,
    name: "เสื้อเชิ้ต",
    price: 590,
    category: "เสื้อผ้า",
    img: "/product/เสื้อยืดแขนสั้นคอกลม.jpg",
  },
  {
    id: 3,
    name: "นาฬิกาข้อมือ",
    price: 990,
    category: "นาฬิกา",
    img: "/product/il_fullxfull.6717931462_jx8d.avif",
  },
  {
    id: 4,
    name: "รองเท้า",
    price: 290,
    category: "รองเท้า",
    img: "/product/Urbanoscostumatizados.jpg",
  },
  {
    id: 5,
    name: "หูฟังบลูทูธ",
    price: 1290,
    category: "อุปกรณ์",
    img: "/product/download.jpg",
  },
  {
    id: 6,
    name: "กระเป๋า",
    price: 390,
    category: "กระเป๋า",
    img: "/product/BLACKMORAL.jpg",
  },
  {
    id: 7,
    name: "เสื้อเชิ้ต",
    price: 590,
    category: "เสื้อผ้า",
    img: "/product/เสื้อยืดแขนสั้นคอกลม.jpg",
  },
  {
    id: 8,
    name: "นาฬิกาข้อมือ",
    price: 990,
    category: "นาฬิกา",
    img: "/product/il_fullxfull.6717931462_jx8d.avif",
  },
  {
    id: 9,
    name: "รองเท้า",
    price: 290,
    category: "รองเท้า",
    img: "/product/Urbanoscostumatizados.jpg",
  },
  {
    id: 10,
    name: "หูฟังบลูทูธ",
    price: 1290,
    category: "อุปกรณ์",
    img: "/product/download.jpg",
  },
  {
    id: 11,
    name: "แว่นกันแดด",
    price: 450,
    category: "เครื่องประดับ",
    img: "/product/sunglasses.jpg",
  },
  {
    id: 12,
    name: "หมวกแก๊ป",
    price: 220,
    category: "เครื่องประดับ",
    img: "/product/cap.jpg",
  },
  {
    id: 13,
    name: "เสื้อกันหนาว",
    price: 1200,
    category: "เสื้อผ้า",
    img: "/product/sweater.jpg",
  },
  {
    id: 14,
    name: "กระเป๋าสตางค์",
    price: 350,
    category: "กระเป๋า",
    img: "/product/wallet.jpg",
  },
  {
    id: 15,
    name: "สายชาร์จ USB-C",
    price: 150,
    category: "อุปกรณ์",
    img: "/product/charger.jpg",
  },
  {
    id: 16,
    name: "ชุดนอน",
    price: 680,
    category: "เสื้อผ้า",
    img: "/product/pajamas.jpg",
  },
];

export default products;