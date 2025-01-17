import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import Login from "./conponents/Login";
import Cart from "./conponents/Cart";
import Checkout from "./Pages/Checkout";
import SingleBook from "./conponents/SingleBook";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./PrivateRoutes";
import Orders from "./conponents/Orders";
import AdminRoutes from "./AdminRoutes";
import AdminLogin from "./conponents/AdminLogin";
import Favourites from "./Pages/Favourites";

function App() {
  return (
    <div className="px-30">
      <AuthProvider>
      <Navbar />
        <main className="min-h-screen maw-w-screen-2xl py-6">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/favourites" element={<Favourites />}></Route>
            <Route path="/checkout" element={<PrivateRoutes><Checkout /></PrivateRoutes>}></Route>
            <Route path="/books/:id" element={<SingleBook />}></Route>
            <Route path="/orders" element={<PrivateRoutes><Orders/></PrivateRoutes>}></Route>
            <Route path="/admin" element={<AdminLogin />}></Route>
            <Route path="/dashboard" element={<AdminRoutes><div>Adminnbnbnbnbn</div></AdminRoutes>}>
              <Route path="" element={<AdminRoutes><div>home</div></AdminRoutes>}/>
              <Route path="add-new-book" element={<AdminRoutes><div>navin</div></AdminRoutes>}/>
              <Route path="edit-book/:id" element={<AdminRoutes><div>edit</div></AdminRoutes>}/>
              <Route path="manage-book" element={<AdminRoutes><div>manage</div></AdminRoutes>}/>
            </Route>
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
