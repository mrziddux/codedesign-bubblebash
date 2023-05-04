'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BarIcon, XIcon } from "./icon";

const navItems = ['Home', 'Our Services', 'Portfolio', 'Testimonial', 'Contact Us']

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
      <Link href={'/'} className="flex gap-2 items-center">
        <Image src={'/logo.svg'} alt="Bubble Bash Logo" width={40} height={40} />
        <p className="text-lg font-semibold">Bubble Bash</p>
      </Link>
      <button className="block md:hidden z-50" onClick={navToggleHandler}>
        {toggle ? <XIcon /> : <BarIcon />}
      </button>
      <nav className={`fixed md:static md:translate-x-0 h-screen md:h-auto top-0 right-0 sm:left-1/4 left-0 flex flex-col justify-center md:justify-start md:flex-row items-center gap-10 text-base transition md:bg-transparent bg-black ${!toggle ? 'translate-x-full' : 'z-40 translate-x-0'}`}>
        {navItems.map((item, i) => (
          <Link key={i} href={'#'} className="hover:underline underline-offset-2">{item}</Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;