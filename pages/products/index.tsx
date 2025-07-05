
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Product {
  id: string;
  name: string;
  price: number;
  condition: string;
  imageUrl: string;
  categoryName: string;
}

interface Category {
  id: string;
  name: string;
}

export default function CustomerProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const router = useRouter();

  const limit = 6;

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  useEffect(() => {
    let url = "http://localhost:5000/api/products";
    const params = new URLSearchParams();
    if (selectedCategory) params.append("category", selectedCategory);
    if (sort) params.append("sort", sort);
    if (search) params.append("search", search);
    params.append("page", page.toString());
    params.append("limit", limit.toString());

    url += `?${params.toString()}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(data.totalPages);
      });
  }, [selectedCategory, sort, search, page]);

  const goToProductDetail = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 dark:text-white">Browse Products</h2>

      <div className="flex flex-wrap gap-4 mb-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        >
          <option value="">Sort By</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="condition">Condition</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => goToProductDetail(product.id)}
            className="cursor-pointer border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow hover:shadow-lg transition p-4"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full object-contain mb-3 rounded"
            />
            <h3 className="text-lg font-semibold dark:text-white">{product.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{product.categoryName}</p>
            <p className="text-blue-600 font-bold mt-1">CA${product.price}</p>
            <p className="text-sm capitalize text-gray-600 dark:text-gray-300">
              Condition: {product.condition}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center dark:text-white">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
