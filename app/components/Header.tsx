import Image from "next/image";
import Button from "./Button";
import NavLinks from "./NavBar";
export default function Header() {
  return (
    <header className="p-4 ml-5">
      <div className="flex items-center gap-4 justify-between">
        <div className="flex gap-8">
          <Image
            src={"/Images/logo black.png"}
            alt="car-logo"
            width={90}
            height={34}
          />
          <div className="flex items-center gap-2">
            <img src="/Icons/phone.svg" alt="phone-icon" className="w-4 h-4" />
            <p className="text-xs">+75 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <NavLinks />
        </div>
        <div>
          <Button title="Submit listing" />
        </div>
      </div>
    </header>
  );
}
