import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;