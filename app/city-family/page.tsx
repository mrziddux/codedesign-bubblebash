import Image from 'next/image'

const CityFamily = () => {
	return (
		<>
			<main className='max-w-5xl mx-auto px-6 lg:px-0 mb-20'>
				<section>
					<div className='w-full aspect-video relative overflow-hidden'>
						<Image src={'/images/hero-project-1.jpg'} alt='Hero Image' className='object-cover' fill />
					</div>
					<div className='mt-4'>
						<h1 className='font-bold text-3xl'>City Family</h1>
						<h4 className='font-semibold text-xl mt-4'>Latar Belakang</h4>
						<p className='mt-2 text-justify' style={{ textJustify: 'inter-word' }}>
							Dalam dunia bisnis yang terus berkembang, efisiensi dan kolaborasi yang baik di antara karyawan menjadi kunci
							kesuksesan. Dengan perkembangan teknologi, solusi berbasis aplikasi telah menjadi cara yang efektif untuk
							mengelola sumber daya manusia dan memperkuat budaya perusahaan. Oleh karena itu, proyek All-in-One Apps untuk
							internal company hadir untuk memberikan platform yang komprehensif dan terintegrasi, memfasilitasi
							komunikasi, manajemen karyawan, gamifikasi, dan pengelolaan tugas secara efisien.
						</p>
						<h4 className='font-semibold text-xl mt-4'>Fitur-fitur:</h4>
						<ul className='mt-4'>
							<li>
								<h5 className='font-bold'>Sosial Media</h5>
								<div className='flex flex-col md:flex-row gap-10 mt-4'>
									<div className='md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]'>
										<Image
											src={'/images/city-family/social-media.svg'}
											alt='Social Media Image'
											className='object-contain'
											fill
										/>
									</div>
									<ul className='md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4'>
										<li className='text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Berita dan Pemberitahuan</span>: Fitur ini
											memungkinkan pengguna untuk membagikan berita, pengumuman, dan pembaruan terkini secara
											real-time.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Grup dan Forum</span>: Fasilitas untuk membuat dan
											bergabung dalam grup atau forum berdasarkan proyek, departemen, atau minat khusus untuk
											meningkatkan komunikasi tim.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Chat dan Kolaborasi</span>: Pengguna dapat
											berkomunikasi melalui obrolan langsung, berbagi dokumen, dan bekerja sama dalam proyek secara
											real-time.
										</li>
									</ul>
								</div>
							</li>
							<li className='mt-16'>
								<h5 className='font-bold'>Manajemen Karyawan</h5>
								<div className='flex flex-col md:flex-row gap-10 mt-4'>
									<div className='md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]'>
										<Image src={'/images/city-family/employee.svg'} alt='Employee' className='object-contain' fill />
									</div>
									<ul className='md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4'>
										<li className='text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Profil Karyawan</span>: Setiap karyawan memiliki
											profil yang mencakup informasi pribadi, keahlian, dan pencapaian.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Evaluasi Kinerja</span>: Modul ini memfasilitasi
											penilaian kinerja rutin dan memberikan umpan balik untuk membantu pengembangan karir karyawan.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Jadwal dan Absensi</span>: Manajemen jadwal kerja,
											izin, dan absensi untuk memastikan efisiensi operasional.
										</li>
									</ul>
								</div>
							</li>
							<li className='mt-16'>
								<h5 className='font-bold'>Gamifikasi</h5>
								<div className='flex flex-col md:flex-row gap-10 mt-4'>
									<div className='md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]'>
										<Image
											src={'/images/city-family/gamification.svg'}
											alt='Employee'
											className='object-contain'
											fill
										/>
									</div>
									<ul className='md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4'>
										<li className='mt-2'>
											<span className='text-primary font-medium'>Poin dan Penghargaan</span>: Memberikan poin dan
											penghargaan kepada karyawan untuk pencapaian, kolaborasi, dan kontribusi positif.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Tantangan dan Kompetisi</span>: Membuat tantangan dan
											kompetisi internal untuk mendorong produktivitas dan semangat persaingan yang sehat.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Papan Pemimpin</span>: Menampilkan papan pemimpin
											untuk memotivasi karyawan dan meningkatkan partisipasi dalam inisiatif gamifikasi.
										</li>
									</ul>
								</div>
							</li>
							<li className='mt-16'>
								<h5 className='font-bold'>Task Manajemen</h5>
								<div className='flex flex-col md:flex-row gap-10 mt-4'>
									<div className='md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]'>
										<Image
											src={'/images/city-family/project-management.svg'}
											alt='Social Media Image'
											className='object-contain'
											fill
										/>
									</div>
									<ul className='md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4'>
										<li className='text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Pengelolaan Proyek</span>: Platform ini menyediakan
											alat untuk membuat, mengelola, dan menetapkan tugas dalam konteks proyek tertentu.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Notifikasi dan Pengingat</span>: Memberikan notifikasi
											real-time dan pengingat untuk memastikan tugas diselesaikan tepat waktu.
										</li>
										<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
											<span className='text-primary font-medium'>Kerja Tim</span>: Fasilitas kolaboratif untuk
											memudahkan koordinasi dan komunikasi antar anggota tim dalam menyelesaikan tugas.
										</li>
									</ul>
								</div>
							</li>
						</ul>
						<h4 className='font-semibold text-xl mt-4'>Keuntungan</h4>
						<ul className='mt-4 list-decimal pl-4'>
							<li className='mt-2'>
								<span className='text-primary font-medium'>Integrasi Seamless</span>: Seluruh fitur terintegrasi dengan
								baik, memungkinkan pengguna beralih dengan mudah antara fungsi sosial media, manajemen karyawan,
								gamifikasi, dan task manajemen.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Peningkatan Komunikasi</span>: Meningkatkan transparansi dan
								komunikasi di antara karyawan dan tim, mengurangi hambatan informasi.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Pengembangan Karyawan</span>: Memfasilitasi pengembangan dan
								pertumbuhan karyawan melalui evaluasi kinerja dan gamifikasi.
							</li>
							<li className='mt-1 text-justify' style={{ textJustify: 'inter-word' }}>
								<span className='text-primary font-medium'>Efisiensi Operasional</span>: Menyederhanakan proses manajemen
								tugas dan pengelolaan proyek, meningkatkan produktivitas dan efisiensi operasional.
							</li>
						</ul>
						<p className='mt-2'>
							Dengan proyek ini, diharapkan perusahaan dapat mencapai suasana kerja yang lebih kolaboratif, proaktif, dan
							produktif, yang pada gilirannya akan meningkatkan kinerja dan kepuasan karyawan.
						</p>
					</div>
				</section>
			</main>
		</>
	)
}

export default CityFamily
