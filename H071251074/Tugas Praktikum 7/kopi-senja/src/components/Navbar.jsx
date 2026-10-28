function Navbar({ totalJumlah, totalHarga }) {
  return (
    <nav className="sticky top-0 z-10 bg-stone-900 text-amber-50 shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <h1 className="text-xl font-bold">Kedai Kopi Senja</h1>
        <div className="text-right text-sm">
          <p>{totalJumlah} item dipesan</p>
          <p className="font-semibold">Total Rp {totalHarga.toLocaleString("id-ID")}</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
