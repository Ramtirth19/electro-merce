
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">Welcome to Electro Recommerce</h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">Buy certified used & refurbished electronics at great prices.</p>
      <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
        Browse Products
      </Link>
    </div>
  );
}
