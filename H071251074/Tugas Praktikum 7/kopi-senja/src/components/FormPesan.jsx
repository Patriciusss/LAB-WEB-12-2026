import { useState } from "react";

function FormPesan({ kosong, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [pesanError, setPesanError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (kosong) {
      setPesanError("Pesanan masih kosong. Pilih menu terlebih dahulu.");
      return;
    }
    if (nama.trim() === "") {
      setPesanError("Nama wajib diisi.");
      return;
    }
    if (meja.trim() === "") {
      setPesanError("Nomor meja wajib diisi.");
      return;
    }

    onKirim({ nama: nama.trim(), meja: meja.trim() });
    setNama("");
    setMeja("");
    setPesanError("");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold">Data Pemesan</h2>

      <div className="mt-3 space-y-3">
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Nomor meja"
          value={meja}
          onChange={(e) => setMeja(e.target.value)}
          className="w-full rounded-lg border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none"
        />
      </div>

      {pesanError && (
        <p role="alert" className="mt-3 rounded-lg bg-red-100 px-3 py-2 text-sm text-red-700">
          {pesanError}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-stone-900 py-2 font-medium text-amber-50 hover:bg-stone-800"
      >
        Kirim Pesanan
      </button>
    </form>
  );
}

export default FormPesan;
