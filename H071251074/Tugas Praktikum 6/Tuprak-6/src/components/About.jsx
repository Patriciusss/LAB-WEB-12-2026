function About() {
  const perkenalan =
    "Saya mahasiswa Sistem Informasi yang tertarik pada pengembangan web modern. Saya senang belajar hal baru, merancang antarmuka yang sederhana, dan mengubah ide menjadi produk yang bisa dipakai banyak orang.";

  const dataDiri = [
    { id: 1, label: "Nama", nilai: "Patricius Reinhard Danduru" },
    { id: 2, label: "Kampus", nilai: "Universitas Hasanuddin" },
    { id: 3, label: "Jurusan", nilai: "Sistem Informasi" },
    { id: 4, label: "Domisili", nilai: "Makassar" },
    { id: 5, label: "Email", nilai: "patriciusdanduru@gmail.com" },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold">Tentang Saya</h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-center">
        <p className="leading-relaxed text-slate-400">{perkenalan}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          {dataDiri.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-indigo-400/50"
            >
              <p className="text-xs uppercase tracking-wider text-indigo-400">{item.label}</p>
              <p className="mt-1 font-medium wrap-break-word">{item.nilai}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;