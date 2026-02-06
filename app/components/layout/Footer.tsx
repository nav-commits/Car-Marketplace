"use client";
import { footerColumns, socials } from "../../../data/footerData";
import Button from "../ui/Button";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 border-t border-gray-300">
        {footerColumns.map((column, index) => (
          <div key={index}>
            <h3 className="font-semibold mb-4">{column.title}</h3>
            <ul className="space-y-2 text-sm">
              {column.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            {column.title === "Sale Hours" && (
              <>
                <h4 className="font-semibold mt-6 mb-2">{socials.title}</h4>
                <div className="flex items-center gap-3 text-md">
                  {socials.items.map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href="#"
                        aria-label={social.label}
                        className="hover:text-gray-900"
                      >
                        <Icon />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="px-6 py-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 exemple.com. All rights reserved.</p>
        <div className="flex gap-3 mt-2 md:mt-0">
          <p>Terms & Conditions</p>
          <p>Privacy Notice</p>
        </div>
        <Button
          borderRadius="rounded-full"
          type="button"
          className="bg-[#405FF2] px-3 py-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          icon={
            <img
              src="/Icons/arrow-up.svg"
              alt="phone-icon"
              className="w-4 h-4"
            />
          }
        />
      </div>
    </footer>
  );
}
