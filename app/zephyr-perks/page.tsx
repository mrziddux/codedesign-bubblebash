import Image from 'next/image'
import Link from 'next/link'

const ZephyrPerks = () => {
	return (
		<>
			<main className='max-w-5xl mx-auto px-6 lg:px-0 mb-20'>
				<nav className='py-4 w-full'>
					<Link href={'/'} className='inline-flex items-center gap-2 font-medium'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='w-5 h-5'>
							<path
								fill-rule='evenodd'
								d='M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z'
								clip-rule='evenodd'
							/>
						</svg>
						<span>Kembali</span>
					</Link>
				</nav>
				<section>
					<div className='w-full aspect-video relative overflow-hidden'>
						<Image src={'/images/hero-project-3.jpg'} alt='Hero Image' className='object-cover' fill />
					</div>
					<div className='mt-4'>
						<h1 className='font-bold text-3xl'>Zephyr Perks</h1>
						<h4 className='font-semibold text-xl mt-4'>Latar Belakang</h4>
						<p className='mt-2 text-justify' style={{ textJustify: 'inter-word' }}>
							Aplikasi ini dirancang untuk mendukung industri retail dalam perdagangan hijab dan outwear muslim. Melihat
							pertumbuhan pasar fashion muslim yang signifikan, aplikasi ini memadukan teknologi dan bisnis fashion untuk
							memberikan pengalaman belanja yang unik dan sesuai dengan nilai-nilai muslim. Berikut adalah rincian proyek
							ini
						</p>
						<h4 className='font-semibold text-xl mt-4'>Fitur-fitur:</h4>
						<ul className='mt-4'>
							<li>
								<h5 className='font-bold'>Katalog Produk</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Katalog lengkap dengan berbagai koleksi hijab dan outwear muslim terbaru. Filter dan pencarian yang
									canggih untuk memudahkan pengguna menemukan produk yang diinginkan.
								</p>
							</li>
							<li className='mt-6'>
								<h5 className='font-bold'>Pesan dan Kostumisasi</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Kemampuan untuk melakukan pemesanan produk khusus atau permintaan kustomisasi sesuai preferensi
									pelanggan.
								</p>
							</li>
							<li className='mt-6'>
								<h5 className='font-bold'>Pengelolaan Stok dan Inventori</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Sistem manajemen stok real-time untuk memantau ketersediaan produk. Notifikasi otomatis untuk
									menginformasikan perubahan stok dan peringatan restok.
								</p>
							</li>
							<li className='mt-6'>
								<h5 className='font-bold'>Promosi dan Diskon</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Program loyalitas dan diskon untuk pelanggan setia. Kampanye promosi yang dapat diakses langsung
									melalui aplikasi.
								</p>
							</li>
							<li className='mt-6'>
								<h5 className='font-bold'>Pembayaran Aman</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Integrasi gateway pembayaran aman dan nyaman. Opsi pembayaran beragam, termasuk kartu kredit, transfer
									bank, dan dompet digital.
								</p>
							</li>
							<li className='mt-6'>
								<h5 className='font-bold'>Profil Pengguna dan Rekomendasi</h5>
								<p className='text-justify mt-2' style={{ textJustify: 'inter-word' }}>
									Profil pelanggan yang dapat disesuaikan dan menyimpan riwayat transaksi. Rekomendasi produk berdasarkan
									preferensi dan riwayat belanja.
								</p>
							</li>
						</ul>
						<h4 className='font-semibold text-xl mt-4'>Keuntungan</h4>
						<ul className='mt-4 list-decimal pl-4'>
							<li className='mt-2'>
								<span className='text-primary font-medium'>Kemudahan dalam berbelanja</span>: Antarmuka pengguna yang
								ramah pengguna untuk pengalaman belanja yang intuitif dan menyenangkan.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Kemajuan fashion muslim</span>: Menjadi pusat belanja yang
								mendukung kemajuan dan tren dalam industri fashion muslim.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Pilihan kustomisasi</span>: Memberikan pelanggan pilihan untuk
								memesan produk sesuai keinginan mereka.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Tranparasi bisnis</span>: Memastikan transparansi dalam stok,
								pembayaran, dan pengiriman untuk meningkatkan kepercayaan pelanggan.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Inovasi teknologi</span>: Menggunakan teknologi visualisasi 3D
								dan analitik untuk memperkaya pengalaman pengguna dan meningkatkan strategi penjualan.
							</li>
						</ul>
						<p className='mt-2'>
							Aplikasi ini tidak hanya menyajikan sebagai platform perdagangan elektronik, tetapi juga sebagai sarana untuk
							mendukung dan memajukan tren fashion muslim dengan menyesuaikan diri dengan nilai-nilai dan kebutuhan
							pelanggan yang berkembang.
						</p>
						<h5 className='font-semibold text-xl mt-6'>Contoh Antarmuka Aplikasi</h5>
						<div className='grid grid-cols-3 mt-4 gap-y-6'>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-1.svg'} alt='Image 1' className='object-contain' fill />
							</div>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-2.svg'} alt='Image 1' className='object-contain' fill />
							</div>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-3.svg'} alt='Image 1' className='object-contain' fill />
							</div>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-4.svg'} alt='Image 1' className='object-contain' fill />
							</div>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-5.svg'} alt='Image 1' className='object-contain' fill />
							</div>
							<div className='w-full aspect-[9/16] relative'>
								<Image src={'/images/sk/image-6.svg'} alt='Image 1' className='object-contain' fill />
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default ZephyrPerks
