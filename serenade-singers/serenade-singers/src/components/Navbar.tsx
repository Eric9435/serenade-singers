import Link from "next/link";

import {
  Music,
  Instagram,
  ExternalLink,
} from "lucide-react";

import { site } from "@/data/site";

const links = [
  ["About", "/about"],
  ["Events", "/events"],
  ["Activities", "/activities"],
  ["Members", "/members"],
  ["Classes", "/classes"],
  ["Blog", "/blog"],
  ["Terms", "/terms"],
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8dfcc] bg-[#F8F7F3]/90 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-3">

          <div className="rounded-full bg-[#061A2F] p-2 text-[#C9A24A]">
            <Music size={22} />
          </div>

          <div>
            <p className="text-lg font-bold uppercase tracking-[0.22em] text-[#061A2F]">
              Serenade
            </p>

            <p className="-mt-1 text-xs uppercase tracking-[0.42em] text-[#C9A24A]">
              Singers
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-[#061A2F]/80 hover:text-[#C9A24A]"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">

          <a href={site.facebook} target="_blank">
            <ExternalLink
              size={18}
              className="text-[#061A2F]"
            />
          </a>

          <a href={site.instagram} target="_blank">
            <Instagram
              size={18}
              className="text-[#061A2F]"
            />
          </a>

          <a
            href={site.signupForm}
            target="_blank"
            className="rounded-full bg-[#061A2F] px-5 py-2 text-sm font-semibold text-white hover:bg-[#C9A24A]"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
}
