import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />;
    </>
  );
};

export default MainLayout;
