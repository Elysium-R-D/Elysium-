import Link from "next/link";
import Linkedin from "../icons/linkedin";
import Mail from "../icons/mail";
import Logo from "../svgs/logo";

export default function Footer() {
  return (
    <footer className="relative py-[50px]">
      <div className="mw relative z-10">
        <div className="flex items-center justify-between p-2.5 mb-12">
          <div className="max-w-[400px] space-y-2.5">
            <Logo />
            <p className="text-[18.01px] font-medium text-[var(--color-footer-text)]">
              Research. Regulation. R&D. Transforming Digital Economies.
            </p>
            <div className="flex items-center gap-2">
              <a href="" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Mail />
              </a>
            </div>
          </div>

          <div className="flex gap-8">
            <Link href="#about" className="text-footer hover:opacity-80">
              About
            </Link>
            <Link href="#focus" className="text-footer hover:opacity-80">
              Focus Area
            </Link>
            <Link href="#ventures" className="text-footer hover:opacity-80">
              Ventures
            </Link>
            <Link href="#insights" className="text-footer hover:opacity-80">
              Insights
            </Link>
            <Link href="#careers" className="text-footer hover:opacity-80">
              Careers
            </Link>
          </div>
        </div>

        <div
          className="border-t pt-7"
          style={{ borderColor: "var(--color-footer-border)" }}
        >
          <div className="flex justify-between items-center">
            <p
              className="text-[15px]"
              style={{ color: "var(--color-footer-text)" }}
            >
              © 2025 Elysium Research. All rights reserved.
            </p>
            <div className="flex gap-12">
              <a
                href="#compliance"
                className="text-[15px] hover:opacity-80"
                style={{ color: "var(--color-footer-text)" }}
              >
                Compliance
              </a>
              <a
                href="#privacy"
                className="text-[15px] hover:opacity-80"
                style={{ color: "var(--color-footer-text)" }}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
