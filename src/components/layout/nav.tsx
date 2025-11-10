"use client";

import Link from "next/link";
import { useState } from "react";
import Hamburger from "../svgs/hamburger";
import Logo from "../svgs/logo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[50px] h-10 md:h-[90px] ${
        mobileOpen ? "bg-white" : ""
      } lg:bg-transparent`}
    >
      <div className="mw size-full flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <nav className="max-lg:hidden flex items-center gap-8">
          <Link href="/" className="text-nav hover:opacity-80">
            Home
          </Link>
          <Link href="/about-us" className="text-nav hover:opacity-80">
            About
          </Link>
          <Link href="/focus-area" className="text-nav hover:opacity-80">
            Focus Areas
          </Link>
          <Link href="/program" className="text-nav hover:opacity-80">
            Program
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="max-lg:hidden! btn-primary text-button w-[204px]"
        >
          Contact Us
        </Link>

        <button
          type="button"
          aria-label="Open navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={toggleMobile}
          className="cursor-pointer lg:hidden p-2 rounded-md hover:bg-black/5 active:scale-[0.98] transition"
        >
          <Hamburger />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-[45] ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-[88%] max-w-[360px] bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.25)] transition-transform duration-200 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="px-4 pt-[70px] md:pt-[110px] pb-6 flex flex-col gap-2 bg-white h-screen border-l border-black/10">
            <Link
              href="/"
              onClick={closeMobile}
              className="text-nav py-3 px-2 rounded hover:bg-black/5"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={closeMobile}
              className="text-nav py-3 px-2 rounded hover:bg-black/5"
            >
              About
            </Link>
            <Link
              href="/focus-area"
              onClick={closeMobile}
              className="text-nav py-3 px-2 rounded hover:bg-black/5"
            >
              Focus Areas
            </Link>
            <Link
              href="/program"
              onClick={closeMobile}
              className="text-nav py-3 px-2 rounded hover:bg-black/5"
            >
              Program
            </Link>
            <Link
              href="/contact-us"
              onClick={closeMobile}
              className="btn-primary text-button mt-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
