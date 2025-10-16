import React from "react";
import Logo from "../svgs/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[50px] h-[90px]">
      <div className="mw size-full flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <nav className="flex items-center gap-8">
          <Link href="#home" className="text-nav hover:opacity-80">
            Home
          </Link>
          <Link href="#about" className="text-nav hover:opacity-80">
            About
          </Link>
          <Link href="#focus" className="text-nav hover:opacity-80">
            Focus Areas
          </Link>
          <Link href="#program" className="text-nav hover:opacity-80">
            Program
          </Link>
        </nav>

        <button className="btn-primary text-button w-[204px]">
          Contact Us
        </button>
      </div>
    </header>
  );
}
