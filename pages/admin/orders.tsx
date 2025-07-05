
import { useEffect, useState } from "react";

interface Order {
  id: string;
  customerName: string;
  total: number;
  status: string;
  createdAt: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border dark:border-gray-700">
          <thead className="bg-gray-200 dark:bg-gray-800">
            <tr>
              <th className="p-3 border dark:border-gray-700 text-left">Order ID</th>
              <th className="p-3 border dark:border-gray-700 text-left">Customer</th>
              <th className="p-3 border dark:border-gray-700 text-left">Total</th>
              <th className="p-3 border dark:border-gray-700 text-left">Status</th>
              <th className="p-3 border dark:border-gray-700 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="p-3 border dark:border-gray-700">{order.id}</td>
                <td className="p-3 border dark:border-gray-700">{order.customerName}</td>
                <td className="p-3 border dark:border-gray-700">CA${order.total.toFixed(2)}</td>
                <td className="p-3 border dark:border-gray-700 capitalize">{order.status}</td>
                <td className="p-3 border dark:border-gray-700">{new Date(order.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500 dark:text-gray-400">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
