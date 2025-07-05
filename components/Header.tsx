
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md mb-6">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Electro Recommerce
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/cart" className="hover:underline dark:text-white">
            Cart ({itemCount})
          </Link>
          <Link href="/checkout" className="hover:underline dark:text-white">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
