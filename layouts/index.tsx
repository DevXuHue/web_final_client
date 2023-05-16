import React from "react";
import { SideBar, TopNav } from "../components";
import AdminRoute from "./AdminRoute";

interface LayoutAdminProps {
  children: React.ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ children }) => {
  return (
    <AdminRoute>
      <div className="layout">
        <SideBar />
        <div className="layout__content">
          <TopNav />
          <div className="layout__content-main">{children}</div>
        </div>
      </div>
    </AdminRoute>
  );
};

export default LayoutAdmin;
