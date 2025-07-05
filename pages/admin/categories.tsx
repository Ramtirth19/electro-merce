
import { useEffect, useState } from "react";

interface Category {
  id: string;
  name: string;
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState("");

  useEffect(() => {
    fetch("/api/admin/categories")
      .then((res) => res.json())
      .then(setCategories);
  }, []);

  const handleAddCategory = () => {
    if (!newCategory.trim()) return;
    fetch("/api/admin/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory })
    })
      .then((res) => res.json())
      .then((cat) => {
        setCategories([...categories, cat]);
        setNewCategory("");
      });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Category Management</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          className="p-2 flex-grow border rounded dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li
            key={cat.id}
            className="p-3 border rounded dark:border-gray-700 bg-white dark:bg-gray-800"
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
