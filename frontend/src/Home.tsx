// src/Home.tsx
import React, { useMemo, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import products from "./Product";
import type { CartContextType } from "./components/layout";
import FilterBar from "./components/FilterBar";

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
}

export default function Home() {
  const { cart, setCart } = useOutletContext<CartContextType>();
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchesName = p.name.toLowerCase().includes(q);
      const matchesCategory = category === "All" || p.category === category;
      return (q === "" ? true : matchesName) && matchesCategory;
    });
  }, [search, category]);

  const addToCart = (id: number) => {
    const product = products.find((p) => p.id === id);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === id);
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* ปุ่มสมัครสมาชิก */}
      <div className="flex justify-end mb-4">
        <Link
          to="/register"
          className="text-blue-600 underline hover:text-blue-800"
        >
          สมัครสมาชิก
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-center">
        Welcome to Home Page
      </h1>

      {/* 🔵 TOP TITLE */}
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-xl font-bold">🛒 ร้านค้า</h1>
        <Link
          to="/cart"
          className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
        >
          {/* ช็อตตะกร้า ( {cart.length} ) */}
          ช็อตตะกร้า 
        </Link>
      </div>

      {/* 🔹 PROMOTIONAL HERO */}
      <section className="w-full rounded-xl mb-6 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-40 w-full flex items-center justify-between p-6">
          <div>
            <h2 className="text-white text-2xl font-bold">แนะนำแบรนด์ & โปรโมชั่น</h2>
            <p className="text-white/90 mt-1">ส่งฟรีเมื่อสั่งซื้อครบ ฿999 — รับส่วนลดพิเศษสำหรับสินค้าที่ร่วมรายการ วันนี้เท่านั้น</p>
            <Link
              to="/promotions"
              className="inline-block mt-3 bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:opacity-95"
            >
              ดูรายละเอียด
            </Link>
          </div>

          <div className="hidden sm:flex gap-3 items-center">
            <img src="/product/BLACKMORAL.jpg" alt="brand-1" className="w-20 h-20 object-cover rounded" />
            <img src="/product/download.jpg" alt="brand-2" className="w-20 h-20 object-cover rounded" />
            <img src="/product/il_fullxfull.6717931462_jx8d.avif" alt="brand-3" className="w-20 h-20 object-cover rounded" />
          </div>
        </div>
      </section>

      {/* 🔹 FILTER BAR */}
      {/* Reusable component: displays search + category pills + reset */}
      <FilterBar
        categories={categories}
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        onReset={() => {}}
      />

      {/* 🔹 MENU BUTTON BAR */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 mb-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 h-10 rounded-lg flex items-center justify-center"
          >
            ปุ่มหมวดหมู่สินค้า {i + 1}
          </div>
        ))}
      </div>

      {/* 🔹 HERO / BANNER */}
      <section className="bg-gray-200 h-40 rounded-xl mb-6 flex items-center justify-center">
        Rectangle 1 (แบนเนอร์บนสุด)
      </section>

      {/* 🔹 PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-sm rounded-xl p-4 flex flex-col gap-2"
          >
            {/* รูปสินค้า */}
            <div className="bg-gray-200 w-full h-44 rounded-md overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ชื่อสินค้า */}
            <h3 className="font-semibold mt-1">{p.name}</h3>

            {/* ราคา */}
            <p className="text-blue-600 font-bold">
              ฿{p.price.toLocaleString()}
            </p>

            {/* ปุ่มเพิ่มลงตะกร้า */}
            <button
              onClick={() => addToCart(p.id)}
              className="bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800"
            >
              เพิ่มลงตะกร้า
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
