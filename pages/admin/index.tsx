
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Admin Dashboard</h1>
      <div className="flex flex-col gap-4 items-center">
        <Link href="/admin/categories" className="text-blue-600 hover:underline">Manage Categories</Link>
        <Link href="/admin/products" className="text-blue-600 hover:underline">Manage Products</Link>
        <Link href="/admin/orders" className="text-blue-600 hover:underline">Track Orders</Link>
      </div>
    </div>
  );
}
