'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

function Hamburger(props: { onClick: () => void }) {
  return (
    <button
      onClick={props.onClick}
      className="flex flex-col items-center gap-1 focus:outline-offset-4"
    >
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </button>
  );
}

function HamburgerBar() {
  return <span className="bg-black w-4 h-[2px] rounded-full"></span>;
}

type MobileMenuProps = {
  onLinkClick: () => void;
};

function MobileMenuContainer({ onLinkClick }: MobileMenuProps) {
  const handleClick = () => {
    onLinkClick();
  };

  return (
    <nav className="top-[88px] left-0 right-0 pt-4 pb-8 bg-white absolute z-50">
      <ul className="flex flex-col gap-2 items-center">
        <li>
          <Link href="/" onClick={handleClick}>
            Hem
          </Link>
        </li>
        <li>
          <Link href="/hundar" onClick={handleClick}>
            Våra hundar
          </Link>
        </li>
        <li>
          <Link href="/om-oss" onClick={handleClick}>
            Om oss
          </Link>
        </li>
        <li>
          <Link href="/kontakt" onClick={handleClick}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link href="/valpar" onClick={handleClick}>
            Valpar/Köpa hund
          </Link>
        </li>
        <li>
          <Link href="/trimning" onClick={handleClick}>
            Pälsvård
          </Link>
        </li>
        <div
          className="
                h-[2px]

                bg-brown-400

                w-1/2
                "
        />
        <li className="">
          <a
            target="_blank"
            href="https://www.instagram.com/bullworkscockers"
            className="flex gap-2"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              height={24}
              width={24}
            />
            bullworkscockers
          </a>
        </li>
        <li className="">
          <a
            target="_blank"
            href="https://www.facebook.com/kennelbullworks"
            className="flex gap-2"
          >
            <Image src="/facebook.svg" alt="Facebook" height={24} width={24} />
            Kennel Bullworks
          </a>
        </li>
      </ul>
    </nav>
  );
}

<>
  <nav className="hidden lg:block uppercase">
    <ul className="flex gap-8">
      <li>
        <Link className="hover:text-slate-400" href="/">
          Hem
        </Link>
      </li>
      |
      <li>
        <Link className="hover:text-slate-400" href="/hundar">
          Våra hundar
        </Link>
      </li>
      |
    </ul>
  </nav>
</>;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <MobileMenuContainer onLinkClick={() => setIsOpen(false)} />}
    </div>
  );
}
