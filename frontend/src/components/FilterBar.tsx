import React from "react";

type Props = {
  categories?: string[];
  category: string;
  setCategory: (c: string) => void;
  search: string;
  setSearch: (s: string) => void;
  onReset?: () => void;
};

const defaultCategories = ["All", "เสื้อผ้า", "กางเกง", "รองเท้า", "กระเป๋า"];

export default function FilterBar({
  categories = defaultCategories,
  category,
  setCategory,
  search,
  setSearch,
  onReset,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ค้นหาชื่อสินค้า..."
        className="flex-1 h-12 rounded-xl p-3 border border-gray-300"
        aria-label="Search products"
      />

      <div className="flex gap-2 flex-wrap">
        {categories.map((c) => {
          const isActive = c === category;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`h-10 px-3 rounded-xl border transition-colors flex items-center justify-center ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
              aria-pressed={isActive}
            >
              {c === "All" ? "ทุกหมวดหมู่" : c}
            </button>
          );
        })}
      </div>

      <div className="ml-auto">
        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            onReset?.();
          }}
          className="h-12 px-4 rounded-xl bg-gray-300 hover:bg-gray-400"
        >
          ล้าง
        </button>
      </div>
    </div>
  );
}
