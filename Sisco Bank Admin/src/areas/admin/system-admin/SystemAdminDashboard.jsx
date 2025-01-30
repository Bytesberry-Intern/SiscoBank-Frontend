/* eslint-disable no-unused-vars */
import React from "react";

import Dashboard from "../common/dashboard-components/dashboard.component";

export default function SystemAdminDashboard() {
  return (
    <>
      <section className="block lg:block">
        <Dashboard>
          <div className="flex items-center justify-center mt-9">
            <div className="text-center text-slate-700">
              <p className="text-4xl font-bold text-[#14532d]">
                Welcome System Admin!
              </p>
            </div>
          </div>
        </Dashboard>
      </section>

      <section className="relative hidden lg:hidden w-[90%] mx-auto">
        <div className="mt-36 flex flex-col items-center justify-center">
          <p className="text-base font-bold text-center">
          The Sikkim State Co-operative Bank Ltd(SISCO BANK)
          </p>
        </div>

        <div className="mt-10 text-center text-xs font-semibold">
          This dashboard is currently accessible only on Desktops and Laptops.
          Please visit us using a desktop device for the best experience.
        </div>
      </section>
    </>
  );
}
