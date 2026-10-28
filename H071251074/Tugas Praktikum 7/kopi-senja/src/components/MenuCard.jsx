import { useState } from "react";

function MenuCard({ item, onTambah }) {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold">{item.nama}</h3>
          <p className="font-semibold text-amber-700">
            Rp {item.harga.toLocaleString("id-ID")}
          </p>
        </div>
        {!item.tersedia && (
          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
            Habis
          </span>
        )}
      </div>

      {terbuka && <p className="mt-2 text-sm text-stone-600">{item.deskripsi}</p>}

      <div className="mt-auto flex gap-2 pt-4">
        <button
          type="button"
          onClick={() => setTerbuka((sebelumnya) => !sebelumnya)}
          className="rounded-lg border border-stone-300 px-3 py-2 text-sm hover:bg-stone-100"
        >
          {terbuka ? "Tutup" : "Detail"}
        </button>
        <button
          type="button"
          disabled={!item.tersedia}
          onClick={() => onTambah(item.id)}
          className="flex-1 rounded-lg bg-amber-700 px-3 py-2 text-sm font-medium text-white hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-stone-300"
        >
          {item.tersedia ? "Tambah" : "Tidak tersedia"}
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
