'use client';

import Link from "next/link";
import { MouseEvent, MouseEventHandler, useState } from "react";

function Hamburger(props: { onClick: () => void }) {
  return (
    <button onClick={props.onClick} className="flex flex-col items-center gap-1 focus:outline-offset-4">
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </button>
  );
}

function HamburgerBar() {
  return (
    <span className="bg-black w-4 h-[2px] rounded-full"></span>
  );
}

type MobileMenuProps = {
  onLinkClick: () => void
}
function MobileMenu({ onLinkClick }: MobileMenuProps) {

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault();
    onLinkClick();
  }

  return (
    <nav className="top-[60px] left-0 right-0 pt-4 pb-8 bg-white absolute">
        <ul className="flex flex-col gap-1 items-center">
          <li><Link href="/om-oss" onClick={handleClick}>Om oss</Link></li>
          <li><Link href="/vara-hundar" onClick={handleClick}>Våra hundar</Link></li>
          <li><Link href="/valpar" onClick={handleClick}>Valpar</Link></li>
          <li><Link href="/cocker-spaniel" onClick={handleClick}>Om Cocker Spaniel</Link></li>
        </ul>
    </nav>
  )
}


export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <MobileMenu onLinkClick={() => setIsOpen(false)} />}
    </div>
  )
}

// position: absolute;
//     top: 0;
//     background: red;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     min-height: 100vh;
