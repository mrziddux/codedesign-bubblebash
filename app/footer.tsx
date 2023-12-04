import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, Logo, TwitterIcon } from "./icon";

const pagesItems = ['Home', 'Our services', 'Portfolio', 'Contact Us']

function Footer() {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row text-black gap-y-10">
        <div className="flex-1">
          <Link href={'/'} className="flex gap-4 items-center mb-4">
            <Logo className="fill-black w-8 h-8" />
            <p className="text-lg font-semibold">STACKNATION</p>
          </Link>
          <p className="text-base w-3/4">Terobos Batas Kreativitas dengan Tim Ahli Kami untuk Merancang dan Mengembangkan Web & Aplikasi yang Membuat Anda Tersenyum Puas!!</p>
          {/* <div className="flex gap-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div> */}
        </div>
        <div className="flex-1">
          <h6 className="font-base font-semibold h-fit mb-4">Navigasi</h6>
          <ul className="flex flex-col md:flex-row w-full gap-4 lg:justify-between h-fit">
            {pagesItems.map((item, i) => (
              <li key={i} className="h-fit">
                <Link href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</Link>
              </li>
            ))}
          </ul>
          {/* <ul className="flex flex-col gap-4 sm:w-fit w-1/2">
            <li>
              <h6 className="font-base font-semibold">Explore</h6>
            </li>
            {exploreItems.map((item, i) => (
              <li key={i} className="w-full">{item}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 sm:w-fit w-1/2">
            <li>
              <h6 className="font-base font-semibold">Company</h6>
            </li>
            {companyItems.map((item, i) => (
              <li key={i} className="w-full">{item}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Footer;