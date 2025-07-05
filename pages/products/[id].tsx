
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  condition: string;
  imageUrl: string;
  categoryName: string;
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [id]);

  if (!product) return <p className="p-6 dark:text-white">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-contain border dark:border-gray-700 rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-300 mb-1">{product.categoryName}</p>
          <p className="text-2xl text-blue-600 font-semibold mb-2">CA${product.price}</p>
          <p className="capitalize text-gray-600 dark:text-gray-400 mb-4">
            Condition: {product.condition}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Available Quantity: {product.quantity}
          </p>
          <button
            onClick={() => alert("Cart coming soon")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
