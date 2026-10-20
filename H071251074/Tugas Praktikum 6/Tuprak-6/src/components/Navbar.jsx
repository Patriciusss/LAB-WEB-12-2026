const menu = [
  { id: "home", nama: "Home" },
  { id: "about", nama: "Tentang" },
  { id: "skills", nama: "Skill" },
  { id: "gallery", nama: "Galeri" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-3 sm:flex-row sm:px-6">
        <h2 className="text-xl font-bold tracking-tight">
          Portofolio <span className="text-indigo-400">Patricius Reinhard Danduru</span>
        </h2>
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-slate-300">
          {menu.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => console.log("Menu diklik:", item.nama)}
                className="transition hover:text-indigo-400"
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;