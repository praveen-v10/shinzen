"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname(); // Get the current path

  const navigationData = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/About",
    },
    {
      name: "Service",
      href: "/Service",
    },
    {
      name: "Internship",
      href: "/Internship",
    },
    {
      name: "Career",
      href: "/Career",
    },
  ];

  return (
    <ul className="flex gap-x-8">
      {navigationData.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`text-gray-700 select-none font-semibold font-T1  hover:text-teal-700 ${
              pathname === item.href ? "text-teal-700" : ""
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;