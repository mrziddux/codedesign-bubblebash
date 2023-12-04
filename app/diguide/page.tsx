import Image from "next/image";

const Diguide = () => {
  return (
    <>
      <main className="max-w-5xl mx-auto px-6 lg:px-0 mb-20">
        <section>
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={"/images/hero-project-2.jpg"}
              alt="Hero Image"
              className="object-cover"
              fill
            />
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-3xl">Diguide</h1>
            <h4 className="font-semibold text-xl mt-4">Latar Belakang</h4>
            <p
              className="mt-2 text-justify"
              style={{ textJustify: "inter-word" }}
            >
              Dengan laju kehidupan yang sibuk di Amerika Serikat, mayoritas
              penduduknya terdiri dari pekerja yang memiliki jadwal padat dan
              waktu terbatas untuk melakukan perbaikan perabotan di rumah.
              Melihat kebutuhan akan layanan yang memudahkan masyarakat untuk
              mendapatkan bantuan tukang secara efisien, aplikasi pemesanan
              tukang online menjadi solusi yang tepat.
            </p>
            <p className="mt-4">
              Pekerjaan sehari-hari dan tekanan waktu membuat masyarakat lebih
              memilih alternatif yang dapat mengoptimalkan waktu mereka. Oleh
              karena itu, aplikasi ini hadir untuk memberikan solusi praktis dan
              efektif dalam pemeliharaan dan perbaikan rumah. Dengan konsep
              pemesanan melalui video call, aplikasi ini tidak hanya menghemat
              waktu pengguna tetapi juga memberikan kenyamanan melalui interaksi
              langsung dengan tukang tanpa perlu kehadiran fisik di lokasi.
            </p>
            <p className="mt-4">
              Trend pemesanan tukang online semakin meningkat di Amerika Serikat
              karena memberikan akses cepat dan mudah kepada masyarakat yang
              tidak memiliki waktu luang yang cukup untuk mengatasi permasalahan
              perabotan di rumah. Dengan fokus pada pengguna yang aktif di dunia
              kerja, aplikasi ini menjadi jawaban atas kebutuhan akan layanan
              yang dapat diakses dan dikelola dengan efisien di tengah kesibukan
              sehari-hari.
            </p>
            <h4 className="font-semibold text-xl mt-4">Fitur-fitur:</h4>
            <ul className="mt-4">
              <li>
                <h5 className="font-bold">Pemesanan Tukang</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/hire.svg"}
                      alt="Social Media Image"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Pengguna dapat memilih jenis layanan (contoh: tukang ac,
                      tukang ledeng) dari berbagai kategori.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Tampilan daftar tukang yang tersedia dengan informasi
                      profil dan rating.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Kemampuan untuk melihat jadwal ketersediaan tukang.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Video Call:</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/video.svg"}
                      alt="Employee"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Pengguna dapat memesan layanan dengan melakukan pemesanan
                      melalui video call.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Integrasi teknologi video call yang memungkinkan interaksi
                      langsung antara pengguna dan tukang.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Fasilitas untuk mengatur waktu dan durasi panggilan.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Manajemen Pesanan</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/project.svg"}
                      alt="Employee"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li className="mt-2">
                      Halaman riwayat pesanan yang mencatat semua pemesanan
                      sebelumnya.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Status real-time untuk setiap pesanan (dalam proses,
                      selesai, dibatalkan, dll.).
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                      Pemberitahuan push untuk meminformasikan status pesanan.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Profil Pengguna dan Tukang</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/profile.svg"}
                      alt="Social Media Image"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >Pengguna dan tukang dapat membuat profil dengan informasi pribadi, pengalaman, dan ulasan.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                    Sistem penilaian dan ulasan untuk memberikan umpan balik dari pengguna.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Pembayaran Online</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/payment.svg"}
                      alt="Social Media Image"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >Integrasi gateway pembayaran untuk memfasilitasi pembayaran online setelah layanan selesai.
                    </li>
                    <li
                      className="mt-1 text-justify"
                      style={{ textJustify: "inter-word" }}
                    >
                    Histori transaksi yang dapat diakses oleh pengguna dan tukang.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Notifikasi Real-time:</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/notification.svg"}
                      alt="Social Media Image"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >Pemberitahuan instan untuk konfirmasi pesanan, pembaruan status, dan pengingat waktu panggilan.
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mt-16">
                <h5 className="font-bold">Penjadwalan Pesanan</h5>
                <div className="flex flex-col md:flex-row gap-10 mt-4">
                  <div className="md:w-4/12 w-full order-2 md:order-1 relative aspect-[9/16]">
                    <Image
                      src={"/images/diguide/schedule.svg"}
                      alt="Social Media Image"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <ul className="md:w-8/12 w-full order-1 md:order-2 list-decimal pl-4">
                    <li
                      className="text-justify"
                      style={{ textJustify: "inter-word" }}
                    >Dapat melakukan penjadwalan untuk pesanan di kemudian hari.
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <h4 className="font-semibold text-xl mt-4">Keuntungan</h4>
            <ul className="mt-4 list-decimal pl-4">
              <li className="mt-2">
                <span className="text-primary font-medium">
                Kemudahan Penggunaan
                </span>
                : Antarmuka pengguna yang intuitif untuk memastikan pengalaman pengguna yang mudah dan efisien.
              </li>
              <li
                className="mt-1 text-justify"
                style={{ textJustify: "inter-word" }}
              >
                <span className="text-primary font-medium">
                Pelayanan Berkualitas: 
                </span>
                : Pengguna dapat memilih tukang berdasarkan ulasan dan peringkat, memastikan pelayanan berkualitas tinggi.
              </li>
              <li
                className="mt-1 text-justify"
                style={{ textJustify: "inter-word" }}
              >
                <span className="text-primary font-medium">
                Pemesanan Fleksibel
                </span>
                : Pengguna memiliki fleksibilitas dalam memilih waktu dan jenis layanan, serta kemampuan untuk melihat jadwal ketersediaan tukang.
              </li>
              <li
                className="mt-1 text-justify"
                style={{ textJustify: "inter-word" }}
              >
                <span className="text-primary font-medium">
                Transparansi
                </span>
                :  Pengguna memiliki akses langsung ke informasi profil tukang, ulasan pengguna, dan status pesanan secara real-time.
              </li>
            </ul>
            <p className="mt-2">
              Dengan proyek ini, diharapkan perusahaan dapat mencapai suasana
              kerja yang lebih kolaboratif, proaktif, dan produktif, yang pada
              gilirannya akan meningkatkan kinerja dan kepuasan karyawan.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Diguide;
