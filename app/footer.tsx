import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./icon";

const pagesItems = ['Home', 'Ourservice', 'Portfolio', 'Testimonial', 'Contact Us']
const exploreItems = ['Resources', 'Blog', 'Documents']
const companyItems = ['About Us', 'Partners', 'Customers', 'Contact Us']

function Footer() {
  return (
    <>
      <div className="flex justify-between flex-col lg:flex-row text-black gap-y-10">
        <div className="flex-1">
          <Link href={'/'} className="flex gap-2 items-center mb-4">
            <Image src={'/logo.svg'} alt="Bubble Bash Logo" width={40} height={40} />
            <p className="text-lg font-semibold">Bubble Bash</p>
          </Link>
          <p className="text-base w-3/4 mb-8">Introducing, We are Bubble Bash digital agency company with more than 6 years of experience. We are committed to serve with all our heart</p>
          <div className="flex gap-6">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
        <div className="flex-1 flex justify-between flex-wrap gap-y-10">
          <ul className="flex flex-col gap-4 sm:w-fit w-1/2">
            <li>
              <h6 className="font-base font-semibold">Pages</h6>
            </li>
            {pagesItems.map((item, i) => (
              <li key={i} className="w-full">{item}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-4 sm:w-fit w-1/2">
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
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;