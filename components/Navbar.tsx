import { pageLinks } from "@/data/data";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-950">
      <div className="flex max-w-7xl mx-auto items-center justify-between p-4">
        <Link href={"/"}>
          <span className="font-semibold text-xl">KimSu</span>
        </Link>
        <ul className="flex gap-4 items-center">
          {pageLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link href={link.href}>
                  <Icon
                    className="hover:translate-x-1 hover:text-sky-700 duration-200"
                    size={"20px"}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
