import profile from "../assets/gallery/profile.jpg";

function Hero() {
  const hero = {
    sapaan: "Halo, saya Patricius Reinhard Danduru",
    deskripsi:
      "Mahasiswa Sistem Informasi yang suka membangun website rapi, responsif, dan nyaman dipakai.",
    foto: profile
  };

  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
          Selamat datang
        </p>
        <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{hero.sapaan}</h1>
        <p className="mt-4 mb-10 max-w-xl text-slate-400">{hero.deskripsi}</p>
        <a
          href={'#contact'}
          onClick={() => console.log("Tombol Hubungi Saya diklik")}
          className="mt-8 rounded-full bg-indigo-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400">
          Hubungi Saya
        </a>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-linear-to-tr from-indigo-500 to-pink-500 opacity-70 blur-md" />
        <img
          src={hero.foto}
          alt="Foto profil"
          className="relative h-56 w-56 rounded-full object-cover ring-4 ring-slate-950 sm:h-72 sm:w-72"
        />
      </div>
    </section>
  );
}

export default Hero;