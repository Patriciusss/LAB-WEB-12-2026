function RingkasanPesanan({ items, totalJumlah, totalHarga, onTambah, onKurang }) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold">Ringkasan Pesanan</h2>

      {items.length === 0 ? (
        <p className="mt-2 text-sm text-stone-500">Belum ada menu yang dipilih.</p>
      ) : (
        <ul className="mt-3 divide-y divide-stone-200">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-2 py-2">
              <div>
                <p className="font-medium">{item.nama}</p>
                <p className="text-sm text-stone-600">
                  Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onKurang(item.id)}
                  className="h-8 w-8 rounded-full border border-stone-300 hover:bg-stone-100"
                >
                  −
                </button>
                <span className="w-6 text-center font-medium">{item.jumlah}</span>
                <button
                  type="button"
                  onClick={() => onTambah(item.id)}
                  className="h-8 w-8 rounded-full bg-amber-700 text-white hover:bg-amber-800"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-stone-200 pt-3">
        <span className="text-sm text-stone-600">{totalJumlah} item</span>
        <span className="font-bold">Rp {totalHarga.toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
