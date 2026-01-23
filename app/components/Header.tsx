import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
export default function Header() {
  interface NavLink {
    name: string;
    href: string;
    icon?: React.ReactNode;
    subMenu?: { name: string; href: string }[];
  }
  const navLinks: NavLink[] = [
    {
      name: "Home",
      href: "#",
      subMenu: [
        { name: "Home 1", href: "#" },
        { name: "Home 2", href: "#" },
      ],
    },
    {
      name: "Listing",
      href: "#",
      subMenu: [
        { name: "Listing Grid", href: "#" },
        { name: "Listing List", href: "#" },
      ],
    },
    {
      name: "Blog",
      href: "#",
      subMenu: [
        { name: "Blog Grid", href: "#" },
        { name: "Blog List", href: "#" },
      ],
    },
    {
      name: "Pages",
      href: "#",
      subMenu: [
        { name: "Page 1", href: "#" },
        { name: "Page 2", href: "#" },
      ],
    },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Sign In", href: "#", icon: null },
  ];

  return (
    <header className="p-4 ml-5">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-8">
          <Image
            src={"/Images/logo black.png"}
            alt="car-logo"
            width={108}
            height={34}
          />
          <div className="flex items-center gap-2">
            <img src="/Icons/SVG.svg" alt="phone-icon" className="w-4 h-4" />
            <p className="text-xs">+75 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center ">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Button title="Submit listing" />
        </div>
      </div>
    </header>
  );
}
