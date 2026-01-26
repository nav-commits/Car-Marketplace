"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import NavLinks from "./NavBar";
import { Bars3Icon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="p-4 ml-4">
      <div className="flex items-center justify-between">
        {/* Logo + Phone */}
        <div className="flex gap-8 items-center">
          <Image
            src="/Images/logo black.png"
            alt="car-logo"
            width={90}
            height={34}
          />
          <div className="flex items-center gap-2">
            <img src="/Icons/phone.svg" alt="phone-icon" className="w-4 h-4" />
            <p className="text-xs">+75 123 456 789</p>
          </div>
        </div>
        {/* Desktop Nav + Button */}
        <div className="hidden md:flex items-center gap-3 justify-center">
          <NavLinks />
        </div>
        <div className="hidden md:block">
          <Button title="Submit listing" />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            {mobileMenuOpen ? (
              <Bars3BottomRightIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 space-y-2">
          <NavLinks isMobile />
          <div>
            <Button title="Submit listing" />
          </div>
        </div>
      )}
    </header>
  );
}
