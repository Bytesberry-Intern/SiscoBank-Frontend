/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

import { GrDocumentConfig } from "react-icons/gr";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaEdit } from 'react-icons/fa'; 
import { FaRegUser } from "react-icons/fa"

export default function SystemAdminSidebar({
  // keep the pathname later to highlight the selected text
  pathname,
}) {
  return (
    <section className="border-4 border-lime-800 p-4 rounded-md bg-[#F3F0FF]">
      <div className="text-slate-700">
        <ul>
          <li>
            <div className="flex items-center gap-x-2 mb-4">
              <MdOutlineDashboardCustomize size={20} />
              <div className="text-lg cursor-pointer">
                <Link to="/system-admin/dashboard" className="py-1">
                  <p
                    className={`shrink-0 ${
                      pathname.includes("/system-admin/dashboard")
                        ? "text-slate-700 font-bold"
                        : "text-slate-700 font-semibold"
                    }`}
                  >
                    Dashboard
                  </p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-2 mb-4">
              <FaRegUser  size={20} />
              <div className="text-lg cursor-pointer">
                <Link to="/system-admin/master-config-feedback" className="py-1">
                  <p
                    className={`shrink-0 ${
                      pathname.includes("/system-admin/master-config-feedback")
                        ? "text-slate-700 font-bold"
                        : "text-slate-700 font-semibold"
                    }`}
                  >
                    Feedback/Grevience Redressal
                  </p>
                </Link>
              </div>
            </div>
          </li>
        
          <li>
            <div className="flex items-center gap-x-2 mb-4">
              <FaEdit size={20} />
              <div className="text-lg cursor-pointer">
                <Link to="#" className="py-1">
                  <p
                    className={`shrink-0 ${
                      pathname.includes("#")
                       ? "text-slate-700 font-bold"
                        : "text-slate-700 font-semibold"
                    }`}
                  >
                    Request for Service
                  </p>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-x-2 mb-4">
              <FaUsers size={20} />
              <div className="text-lg cursor-pointer">
                <Link to="#" className="py-1">
                  <p
                    className={`shrink-0 ${
                      pathname.includes("#")
                       ? "text-slate-700 font-bold"
                        : "text-slate-700 font-semibold"
                    }`}
                  >
                    Employee Management
                  </p>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
