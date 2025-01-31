import React, { useState } from "react";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const SideBar = ({ children }) => {
  const [active, setActive] = useState("/"); // Estado para armazenar o link ativo

  const menuItems = [
    { href: "/", icon: <RxDashboard size={20} />, label: "Dashboard" },
    { href: "/customers", icon: <RxPerson size={20} />, label: "Customers" },
    {
      href: "/orders",
      icon: <HiOutlineShoppingBag size={20} />,
      label: "Orders",
    },
    { href: "/settings", icon: <FiSettings size={20} />, label: "Settings" },
  ];

  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <Link href={"/"}>
            <div className="bg-purple-800 text-white p-3 rounded-lg inline-block mb-4">
              <RxSketchLogo size={20} />
            </div>
          </Link>

          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                onClick={() => setActive(item.href)} // Atualiza o estado do link ativo
                className={`p-3 rounded-lg inline-block my-4 cursor-pointer ${
                  active === item.href
                    ? "bg-purple-800 text-white" // Estilo para o link ativo
                    : "bg-gray-300 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {item.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBar;
