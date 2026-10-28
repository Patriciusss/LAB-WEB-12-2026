import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const menuData = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  // keranjang berbentuk { [id menu]: jumlah }
  const [keranjang, setKeranjang] = useState({});
  const [pesananTerkirim, setPesananTerkirim] = useState(false);

  // Data turunan dihitung dari keranjang, tidak disimpan sebagai state terpisah
  const itemPesanan = menuData
    .filter((menu) => keranjang[menu.id] > 0)
    .map((menu) => ({ ...menu, jumlah: keranjang[menu.id] }));
  const totalJumlah = itemPesanan.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce((total, item) => total + item.harga * item.jumlah, 0);

  function tambahPesanan(id) {
    setKeranjang((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setPesananTerkirim(false);
  }

  function kurangPesanan(id) {
    setKeranjang((prev) => {
      const jumlahBaru = (prev[id] || 0) - 1;
      const salinan = { ...prev };
      if (jumlahBaru > 0) {
        salinan[id] = jumlahBaru;
      } else {
        delete salinan[id];
      }
      return salinan;
    });
  }

  function kirimPesanan() {
    setKeranjang({});
    setPesananTerkirim(true);
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50 text-stone-800">
      <Navbar totalJumlah={totalJumlah} totalHarga={totalHarga} />

      <main className="flex-1 w-full max-w-6xl mx-auto p-4 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MenuList
            menu={menuData}
            kategoriAktif={kategoriAktif}
            onKategoriChange={setKategoriAktif}
            onTambah={tambahPesanan}
          />
        </div>

        <aside className="space-y-4">
          <RingkasanPesanan
            items={itemPesanan}
            totalJumlah={totalJumlah}
            totalHarga={totalHarga}
            onTambah={tambahPesanan}
            onKurang={kurangPesanan}
          />

          {pesananTerkirim && (
            <div className="rounded-2xl bg-emerald-100 text-emerald-900 p-4">
              <p className="font-semibold">Terima kasih!</p>
              <p className="text-sm">Pesanan Anda sudah kami terima. Silakan tunggu di meja Anda.</p>
            </div>
          )}

          <FormPesan kosong={itemPesanan.length === 0} onKirim={kirimPesanan} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
