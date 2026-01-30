"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import NavLinks from "./NavBar";
import { Bars3Icon, Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="p-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo + Phone */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/Images/logo black.png"
            alt="car-logo"
            width={90}
            height={34}
            className="object-contain"
          />
          <div className="hidden sm:flex items-center gap-1">
            <img src="/Icons/phone.svg" alt="phone-icon" className="w-4 h-4" />
            <p className="text-xs">+75 123 456 789</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
          <NavLinks />
        </div>
        <div className="hidden lg:flex flex-shrink-0">
          <Button
            title="Submit listing"
            borderRadius="rounded-lg"
            className="border px-4 py-2"
          />
        </div>
        <div className="lg:hidden flex items-center">
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
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-white shadow-lg rounded-lg p-4 space-y-2">
          <NavLinks isMobile />
          <Button
            title="Submit listing"
            borderRadius="rounded-lg"
            className="border px-4 py-2 w-full"
          />
        </div>
      )}
    </header>
  );
}
