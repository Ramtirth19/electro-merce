
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setProcessing(true);
    // TODO: integrate Stripe checkout session creation
    alert("Payment integration pending. Simulating checkout success.");
    clearCart();
    setProcessing(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y dark:divide-gray-700 mb-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>CA${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="text-lg font-semibold mb-6">Total: CA${total.toFixed(2)}</div>

          <button
            onClick={handleCheckout}
            disabled={processing || !email}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
          >
            {processing ? "Processing..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}
