import foto1 from "../assets/gallery/Project1.PNG";
import foto2 from "../assets/gallery/Project2.PNG";
import foto3 from "../assets/gallery/Project3.PNG";
import foto4 from "../assets/gallery/Project4.PNG";

function Gallery() {
  const galeri = [
    { id: 1, src: foto1, judul: "Project 1" },
    { id: 2, src: foto2, judul: "Project 2" },
    { id: 3, src: foto3, judul: "Project 3" },
    { id: 4, src: foto4, judul: "Project 4" }
  ];

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center text-3xl font-bold">Project Saya</h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galeri.map((foto) => (
          <figure
            key={foto.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-lg"
          >
            <img
              src={foto.src}
              alt={foto.judul}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="p-4 text-center font-medium">{foto.judul}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;