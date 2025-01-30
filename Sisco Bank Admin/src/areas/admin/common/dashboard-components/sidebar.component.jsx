/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

import SystemAdminSidebar from "../../system-admin/SystemAdminSidebar";

import logo from "../../../../assets/logo.png";

function Sidebar({ sideBarType, setSideBarType }) {
  const location = useLocation();
  const { pathname } = location;

  const sidebar = useRef(null);

  return (
    <div className="flex">
  {/* Sidebar */}
  <div className="w-72 flex-shrink-0">
    <div className=" border-4 border-green-900">
      <div className="w-full p-1 rounded-md mx-auto">
        <div className="flex flex-col justify-start items-center gap-x-2">
          <div className="text-primary">
            <img src={logo} className="h-12 w-27" alt="Logo" />
          </div>
          <div className="mt-2 text-center">
            <p className="text-xs font-bold text-[#15391F]">
              The Sikkim State Co-operative Bank Ltd <br></br>(SISCO Bank)
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Sidebar Menu */}
    <div
      id="sidebar"
      ref={sidebar}
      className="w-72 flex flex-col h-screen overflow-y-auto no-scrollbar bg-green-50 border-r-4 border-green-900 border-l-4 border-green-900 p-4 pt-6"
    >
      {/* Sidebar Content */}
      {+sideBarType === +2 ? (
        <SystemAdminSidebar pathname={pathname} />
      ) : null}
    </div>
  </div>
</div>
  )
}
export default Sidebar;
