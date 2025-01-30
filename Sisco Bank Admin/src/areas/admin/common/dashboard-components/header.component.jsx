/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();

  const signOut = async () => {
    // localStorage.removeItem("roleid");
    navigate("/");
  };

  const [Username, setUsername] = useState("");  // Use uppercase Username here

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set it to the state as Username
    }
  }, []);

  return (
    <>
      {/* Desktops and tablets */}
      <section className="hidden md:block pl-2">
        <header className="sticky top-0 bg-green-900 border-b z-20 text-slate-700">
          <div className="grid grid-cols-2 px-6 py-2">
            <div className=" font-bold text-2xl text-white">
              The Sikkim State Co-operative Bank Ltd (SISCO Bank)
            </div>

            <div className="flex justify-end items-center gap-x-9">
              <div className="flex justify-end items-center gap-x-3">
                <div className="text-white">
                  <FaUserCircle size={34} />
                </div>
                <div className="">
                  <p className="text-s font-medium text-white">
                    Hello {Username}  {/* Use Username here */}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div
                  onClick={() => signOut()}
                  className="cursor-pointer text-white hover:text-red-500"
                >
                  <MdOutlinePowerSettingsNew size={20} />
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
}

export default Header;
