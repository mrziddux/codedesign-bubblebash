import Image from "next/image";
import { ArrowRightIcon } from "./icon";
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id='bg-overlay' className='-z-10 bg-primary md:h-[929px] h-[720px] absolute inset-x-0 top-0 w-full'></div>
      <div className="max-w-5xl mx-auto px-6 lg:px-0">
        <Header />
      </div>
      <section id="home" className="max-w-5xl mx-auto px-6 lg:px-0">
        <div className="md:my-[100px] mt-[100px] mb-20">
          <div className="mx-auto text-center mb-[76px]">
            <h1 className="font-bold md:text-6xl text-4xl text-white mb-8">Bangun Dunia Digital Impian Anda Bersama Kami</h1>
            <p className="md:text-lg text-base text-white md:w-3/4 w-full mb-12 mx-auto">Terobos Batas Kreativitas dengan Tim Ahli Kami untuk Merancang dan Mengembangkan Web & Aplikasi yang Membuat Anda Tersenyum Puas!</p>
            {/* <button className="md:px-8 md:py-6 px-6 py-4 bg-white text-black inline-flex gap-2 font-bold text-base">
              <span>Get Started</span>
              <ArrowRightIcon />
            </button> */}
          </div>
          <div className="relative w-full aspect-video mb-[50px]">
            <Image src={'/images/hero.jpg'} alt="Hero Image" fill priority />
          </div>
          {/* <ul className="grid grid-cols-2 md:grid-cols-4 md:gap-40 gap-y-20 text-black text-center">
            <li>
              <h3 className="text-2xl font-semibold mb-2">1.2K</h3>
              <p className="text-base">Happy Clients</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold mb-2">1.1K</h3>
              <p className="text-base">WorldWide Clients</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold mb-2">6+</h3>
              <p className="text-base">Years of Experience</p>
            </li>
            <li>
              <h3 className="text-2xl font-semibold mb-2">12+</h3>
              <p className="text-base">Award Winners</p>
            </li>
          </ul> */}
        </div>
      </section>
      <section id="our-services" className="bg-gray text-black md:mb-[100px] mb-20">
        <div className="py-14 max-w-5xl mx-auto px-6 lg:px-0">
          <p className="text-base mb-1">Servis Kami</p>
          <h2 className="text-3xl font-semibold mb-10">Menyediakan Semua Yang Anda Butuhkan</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-30 md:gap-y-14 gap-16">
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">Strategic Consultation</h4>
              <p className="text-base">Let&apos;s plan and align your goals for project success</p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">UI/UX Design</h4>
              <p className="text-base">Kami mendesain aplikasi yang cantik dan menarik dimata user</p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">Responsive Web</h4>
              <p className="text-base">Membuat aplikasi yang responsive dan interaktif untuk digunakan para pengguna</p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">Mobile App Development</h4>
              <p className="text-base">Mendevelop aplikasi mobile yang menarik, scalable, dan efeseien untuk digunakan</p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">Testing and QA</h4>
              <p className="text-base">Memastikan aplikasimu sudah teruji dan layak pakai</p>
            </div>
            <div className="flex flex-col text-center gap-4 bg-white px-6 py-8 shadow-sm">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="48" height="48" viewBox="0 0 24 24" strokeWidth={1.2} stroke="#2F6B4F" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="12" r="3" />
                <rect x="6" y="3" width="12" height="6" rx="3" />
                <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15" />
              </svg> */}
              <h4 className="text-2xl font-semibold">Efficient Deployment</h4>
              <p className="text-base">Melakukan deployment aplikasi yang cepat dan efesien</p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="max-w-5xl mx-auto px-6 lg:px-0 text-black md:mb-[100px] mb-20">
        <p className="text-base mb-1">Portoflio Kami</p>
        <h2 className="text-3xl font-semibold mb-10">Projek Terbaru</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          <Link href={'/city-family'}>
            <div className="w-full aspect-video relative mb-4">
              <Image src={'/images/project-1.jpg'} alt="Project Image 1" className="object-cover" fill />
            </div>
            <h4 className="text-xl font-semibold mb-2">City Family</h4>
            <p className="font-base">Membuat aplikasi chatting antar user, dan sistem manajemen task agar tugas-tugas menjadi lebih efesien</p>
          </Link>
          <Link href={'/diguide'}>
            <div className="w-full aspect-video relative mb-4">
              <Image src={'/images/project-2.jpg'} alt="Project Image 2" className="object-cover" fill />
            </div>
            <h4 className="text-xl font-semibold mb-2">Diguide</h4>
            <p className="font-base">Membuat aplikasi untuk memperbaiki sesuatu untukmu dengan memanggil tukang secara online</p>
          </Link>
          <Link href={'/zephyr-perks'}>
            <div className="w-full aspect-video relative mb-4">
              <Image src={'/images/project-3.jpg'} alt="Project Image 3" className="object-cover" fill />
            </div>
            <h4 className="text-xl font-semibold mb-2">ZephyrPerks</h4>
            <p className="font-base">Membuat aplikasi untuk claim dan scan voucher pada setiap catalog. juga memberikan informasi catalog terbaru</p>
          </Link>
          <div></div>
          <div>
            <div className="w-full aspect-video relative mb-4">
              <Image src={'/images/project-4.jpg'} alt="Project Image 3" className="object-cover" fill />
            </div>
            <h4 className="text-xl font-semibold mb-2">Dashboardy</h4>
            <p className="font-base">Membuat sistem aplikasi, untuk menghitung penjualanmu setiap harinya</p>
          </div>
          
        </div>
      </section>
      {/* <section className="max-w-5xl mx-auto px-6 lg:px-0 text-black md:mb-[100px] mb-20">
        <p className="text-base mb-1">Client Reviews</p>
        <h2 className="text-3xl font-semibold mb-10">What Our Happy Client Say About Us</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
          <div className="border-2 border-black p-6 h-max">
            <h4 className="text-xl font-semibold mb-2">Website My Hospital</h4>
            <p className="text-base mb-5">Very nice to work with Bubble Bash, a reliable and responsive team is very helpful</p>
            <div className="flex items-center gap-4">
              <div className="w-[48px] aspect-square rounded-full relative bg-zinc-300"></div>
              <div>
                <p className="text-base font-semibold">Katty Clock</p>
                <p className="text-base">CEO My Hospital</p>
              </div>
            </div>
          </div>
          <div className="border-2 border-black p-6 h-max">
            <h4 className="text-xl font-semibold mb-2">Logo F&B Corp</h4>
            <p className="text-base mb-5">Really the best service we&apos;ve ever gotten, really looking forward to the next project</p>
            <div className="flex items-center gap-4">
              <div className="w-[48px] aspect-square rounded-full relative bg-zinc-300"></div>
              <div>
                <p className="text-base font-semibold">John Robert</p>
                <p className="text-base">CEO My Hospital</p>
              </div>
            </div>
          </div>
          <div className="border-2 border-black p-6 h-max  ">
            <h4 className="text-xl font-semibold mb-2">Supermarket Mobile Apps</h4>
            <p className="text-base mb-5">The best developer team ever, it&apos;s a lot of fun working. Maybe work again on the next project?</p>
            <div className="flex items-center gap-4">
              <div className="w-[48px] aspect-square rounded-full relative bg-zinc-300"></div>
              <div>
                <p className="text-base font-semibold">Katty Clock</p>
                <p className="text-base">CEO My Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact-us" className="bg-primary text-white md:mb-[100px] mb-20">
        <div id="bg-overlay">
          <div className="py-[60px] max-w-5xl mx-auto px-6 lg:px-0">
            <div className="text-center md:w-1/2 w-full mx-auto">
              <h2 className="font-bold md:text-4xl text-2xl mb-4 capitalize">Punya ide bisnis? Wujudkan bersama StackNation!</h2>
              <p className="text-base mb-8">Jangan ragu untuk menghubungi kami! Setiap ide Anda memiliki jawaban kreatif di StackNation. Mari wujudkan ide-ide brilian bersama!</p>
              <button className="md:px-8 md:py-6 px-6 py-4 bg-white text-black inline-flex gap-2 font-bold text-base">
                <span>Contact Us</span>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-6 lg:px-0 py-16">
        <Footer />
      </div>
    </>
  )
}
