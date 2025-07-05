
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          <Link
            href="/admin/products"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Manage Products</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">View, add, and update products</p>
          </Link>
          <Link
            href="/admin/categories"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Manage Categories</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">Create or edit categories</p>
          </Link>
          <Link
            href="/admin/orders"
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Track Orders</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">View and update order statuses</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
