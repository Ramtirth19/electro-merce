
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  condition: string;
  imageUrl: string;
  categoryId: string;
}

interface Category {
  id: string;
  name: string;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState<Partial<Product>>({});

  useEffect(() => {
    fetch("/api/admin/products")
      .then((res) => res.json())
      .then(setProducts);
    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: name === "price" || name === "quantity" ? +value : value }));
  };

  const handleAdd = () => {
    fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((product) => {
        setProducts([...products, product]);
        setForm({});
      });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <input name="name" placeholder="Name" value={form.name || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white" />
        <input name="price" placeholder="Price (CAD)" type="number" value={form.price || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white" />
        <input name="quantity" placeholder="Quantity" type="number" value={form.quantity || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white" />
        <input name="imageUrl" placeholder="Image URL" value={form.imageUrl || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white" />
        <select name="condition" value={form.condition || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white">
          <option value="">Condition</option>
          <option value="new">New</option>
          <option value="refurbished">Refurbished</option>
          <option value="used">Used</option>
        </select>
        <select name="categoryId" value={form.categoryId || ""} onChange={handleChange} className="p-2 border rounded dark:bg-gray-800 dark:text-white">
          <option value="">Select Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <button onClick={handleAdd} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-4 bg-white dark:bg-gray-800 dark:border-gray-700">
            <img src={p.imageUrl} alt={p.name} className="h-40 object-contain w-full mb-2" />
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">CA${p.price}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Qty: {p.quantity}</p>
            <p className="text-sm capitalize text-gray-600 dark:text-gray-300">Condition: {p.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
