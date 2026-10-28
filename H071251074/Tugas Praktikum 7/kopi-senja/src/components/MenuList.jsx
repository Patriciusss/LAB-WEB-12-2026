import MenuCard from "./MenuCard.jsx";

const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

function MenuList({ menu, kategoriAktif, onKategoriChange, onTambah }) {
  const menuTampil =
    kategoriAktif === "Semua"
      ? menu
      : menu.filter((item) => item.kategori === kategoriAktif);

  return (
    <section>
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => onKategoriChange(kategori)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              kategori === kategoriAktif
                ? "bg-stone-900 text-amber-50"
                : "bg-white text-stone-700 hover:bg-amber-100"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {menuTampil.map((item) => (
          <MenuCard key={item.id} item={item} onTambah={onTambah} />
        ))}
      </div>
    </section>
  );
}

export default MenuList;
