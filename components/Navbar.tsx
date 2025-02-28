import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-base text-[#585858] flex flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden lg:flex lg:flexCenter">
        <Button
          type="button"
          title="Log in"
          icon="/user.svg"
          className="bg-green-900 px-8 py-4 text-white transition-all hover:bg-black"
        />
      </div>
      <Image
      src="/menu.svg"
      alt="menu.svg"
      width={32}
      height={32}
      className="inline-block cursor-pointer md:hidden lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
