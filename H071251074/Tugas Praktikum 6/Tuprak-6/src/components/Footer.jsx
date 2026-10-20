function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
      <div id="contact" class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="font-semibold text-white mb-2">Tautan</p>
          <div class="flex flex-col gap-1 text-sm">
            <a href="#home" class="hover:text-white">Back to Home</a>
            <a href="#about" class="hover:text-white">Tentang</a>
            <a href="#skills" class="hover:text-white">Skill</a>
            <a href="#gallery" class="hover:text-white">Galeri</a>
          </div>
        </div>
        <div>
          <p class="font-semibold text-white mb-2">Hubungi Saya</p>
          <div class="flex flex-col gap-1 text-sm">
            <a href="https://wa.me" class="hover:text-white">WhatsApp</a>
            <a href="https://www.instagram.com/patriciuss._" class="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <p>&copy; 2026 Patricius Reinhard Danduru.</p>
    </footer>
  );
}

export default Footer;