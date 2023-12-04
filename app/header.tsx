'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BarIcon, Logo, XIcon } from "./icon";

const navItems = ['Home', 'Our Services', 'Portfolio', 'Contact Us']

function Header() {
  const [toggle, setToggle] = useState<Boolean>(false)

  const navToggleHandler = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    if(toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [toggle])

  return (
    <header className="w-full py-4 flex justify-between items-center mt-6 text-white">
      <Link href={'/'} className="flex gap-4 items-center">
        <Logo className="fill-white w-8 h-8" />
        <p className="text-lg font-semibold">STACKNATION</p>
      </Link>
      <button className={`md:hidden z-50 ${toggle ? 'fixed right-4' : 'block'}`} onClick={navToggleHandler}>
        {toggle ? <XIcon /> : <BarIcon />}
      </button>
      <nav className={`fixed md:static md:translate-x-0 h-screen md:h-auto top-0 right-0 sm:left-1/4 left-0 flex flex-col justify-center md:justify-start md:flex-row items-center gap-10 text-base transition md:bg-transparent bg-black ${!toggle ? 'translate-x-full' : 'z-40 translate-x-0'}`}>
        {navItems.map((item, i) => (
          <Link key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:underline underline-offset-2" scroll={false}>{item}</Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;