
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 text-xl font-bold dark:text-white">Admin Panel</div>
        <nav className="flex flex-col gap-2 p-4 text-gray-700 dark:text-gray-200">
          <Link href="/admin/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/admin/categories" className="hover:text-blue-600">Categories</Link>
          <Link href="/admin/products" className="hover:text-blue-600">Products</Link>
          <Link href="/admin/orders" className="hover:text-blue-600">Orders</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
        {children}
      </main>
    </div>
  );
}
