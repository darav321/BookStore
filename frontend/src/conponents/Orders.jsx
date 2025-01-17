import React from "react";
import { useGetOrderByEmailQuery } from "../redux/features/orders/ordersApi";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useFetchAllBooksQuery } from "../redux/features/books/booksApi";
import { getImgUrl } from "../utils/getImgUrl";

const Orders = () => {
  const { currentUser } = useAuth();
  const { data: orders = [], isLoading, isError} = useGetOrderByEmailQuery(currentUser.email);
  console.log(orders);
  const { data: books = [] } = useFetchAllBooksQuery();
  console.log(books);

  return (
    <div className="flex flex-col px-20 lg:px-40 py-10 bg-gray-100 min-h-screen">
  <h1 className="text-3xl font-bold text-gray-700 mb-6">Your Orders</h1>
  <div>
    {orders.length === 0 ? (
      <div className="text-center text-lg font-medium text-gray-500">
        No Orders Found!
      </div>
    ) : (
      <div className="space-y-8">
        {orders.map((order, index) => (
          <div
            key={order._id}
            className="border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-slate-300 rounded-t-lg flex justify-between p-5 items-center">
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Order ID: {order?._id}
                </h3>
                <p className="font-medium text-lg text-gray-700">
                  Total Price: ${order.totalPrice.toFixed(2)}
                </p>
              </div>
              
              <h1 className="text-lg font-medium text-green-700 relative pl-4 left-0">
              <div className="bg-green-700 rounded-full size-2 absolute top-2"></div>
                <span className="pl-4 overflow-hidden">Status: Order Placed Successfully</span>
              </h1>
            </div>
            <div className="p-6">
              <p className="text-2xl font-bold text-gray-700 mb-4">
                Ordered Books:
              </p>
              <ul className="space-y-4">
                {order.productIds.map((productId) => {
                  const product = books.find((item) => item._id === productId);
                  return product ? (
                    <li
                      className="flex items-center border border-gray-200 rounded-lg p-4 bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300"
                      key={productId}
                    >
                      <img
                        className="w-24 h-36 object-cover rounded-lg"
                        src={getImgUrl(product.coverImage)}
                        alt={product.title || "Product Image"}
                      />
                      <div className="mx-6 bg-gray-300 w-px h-28"></div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Name: {product.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Description: {product.description}
                        </p>
                      </div>
                    </li>
                  ) : (
                    <li key={productId}>
                      <p className="text-sm text-gray-600">
                        Product not found
                      </p>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-6 border-t border-gray-300"></div>
            </div>
            <div className="p-6">
              <h1 className="text-lg font-bold text-gray-700 mb-2">
                User Details:
              </h1>
              <p className="text-sm text-gray-600">Name: {order.name}</p>
              <p className="text-sm text-gray-600">
                Address: {order.address.state}, {order.address.country}
              </p>
              <p className="text-sm text-gray-600">Email: {order.email}</p>
              <p className="text-sm text-gray-600">Phone Number: {order.phone}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</div>

  );
};

export default Orders;
