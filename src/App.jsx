import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './authentication/Login'
import ProtectRoute from './authentication/ProtectRoute';
import Foot from './components/Foot'
import Home from '../src/user/pages/Home'
import Checkout from './user/pages/Checkout';
import ProductDetail from './user/pages/ProductDetail';
import { CartProvider } from "../src/contexts/CartContext";
import Payment from './user/pages/Payment';
// import Sidebar from './components/Sidebar';
// import AdminNavbar from './components/AdminNavbar';
// import Dashboard from './admin/Dashboard';
// import ManageProducts from './admin/ManageProducts';
// import ManageUsers from './admin/ManageUsers';
// import Reports from './admin/Reports';

const App = () => {
  return (
    <>
    {/* <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <AdminNavbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ManageProducts />} />
              <Route path="/users" element={<ManageUsers />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router> */}
    {/* <Payment/> */}
    {/* <Checkout/> */}
    <CartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path= "/login" element={<Login/>}></Route>
          <Route path="/" element={<ProtectRoute><Home/></ProtectRoute>}></Route>
          <Route path="/cart" element={<Checkout/>}></Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="/product/:id" element={<ProductDetail/>}></Route>
          <Route path="/logout" element={<Login/>}></Route>
        </Routes>
        <Foot/>
      </Router>
    </CartProvider>
    </>
  )
}

export default App

