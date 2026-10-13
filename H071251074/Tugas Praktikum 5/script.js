const URL_USERS = "https://jsonplaceholder.typicode.com/users";
const URL_TODOS = "https://jsonplaceholder.typicode.com/todos?userId=";

const statusAnggota = document.getElementById("status-anggota");
const errorAnggota = document.getElementById("error-anggota");
const daftarAnggota = document.getElementById("daftar-anggota");

const judulTugas = document.getElementById("judul-tugas");
const progres = document.getElementById("progres");
const statusTugas = document.getElementById("status-tugas");
const errorTugas = document.getElementById("error-tugas");
const inputCari = document.getElementById("cari");
const daftarTugas = document.getElementById("daftar-tugas");
const pesanKosong = document.getElementById("pesan-kosong");

const formTugas = document.getElementById("form-tugas");
const inputJudul = document.getElementById("judul-baru");
const tombolSimpan = document.getElementById("tombol-simpan");
const errorForm = document.getElementById("error-form");
const notifikasi = document.getElementById("notifikasi");

let idTerpilih = null; // id anggota yang sedang dipilih

// ===== F1. Menampilkan daftar anggota =====
async function muatAnggota() {
  statusAnggota.textContent = "Memuat anggota...";
  statusAnggota.classList.remove("hidden");
  errorAnggota.classList.add("hidden");

  try {
    const respons = await fetch(URL_USERS);
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }

    const users = await respons.json();
    users.forEach((user) => {
      const tombol = document.createElement("button");
      tombol.textContent = user.name;
      tombol.className =
        "w-full text-left px-3 py-2 rounded border hover:bg-gray-100";
      tombol.addEventListener("click", () => {
        pilihAnggota(user.id, user.name, tombol);
      });

      daftarAnggota.appendChild(tombol);
    });
    if (users.length > 0) {
      pilihAnggota(users[0].id, users[0].name, daftarAnggota.firstElementChild);
    }
  } catch (error) {
    errorAnggota.textContent = "Gagal memuat anggota: " + error.message;
    errorAnggota.classList.remove("hidden");
  } finally {
    statusAnggota.textContent = "";
    statusAnggota.classList.add("hidden");
  }
}

// ===== F2. Menampilkan tugas anggota =====
function pilihAnggota(id, nama, tombol) {
  // Hapus penanda dari semua anggota
  daftarAnggota.querySelectorAll("button").forEach((b) => {
    b.classList.remove("bg-blue-600", "text-white");
  });
  // Beri penanda pada anggota yang dipilih
  tombol.classList.remove("hover:bg-gray-100");
  tombol.classList.add("bg-blue-600", "text-white", "hover:bg-blue-700", "hover:text-white");

  idTerpilih = id;
  judulTugas.textContent = "Tugas " + nama;
  muatTugas(id);
}

async function muatTugas(id) {
  // Kosongkan daftar lama
  daftarTugas.innerHTML = "";
  inputCari.value = "";
  pesanKosong.classList.add("hidden");
  errorTugas.classList.add("hidden");
  updateProgres();

  statusTugas.textContent = "Memuat tugas...";
  statusTugas.classList.remove("hidden");

  try {
    const respons = await fetch(URL_TODOS + id);
    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }

    const todos = await respons.json();
    todos.forEach((todo) => {
      daftarTugas.appendChild(buatTugas(todo.title, todo.completed));
    });

    if (todos.length === 0) {
      statusTugas.textContent = "Anggota ini belum punya tugas.";
    } else {
      statusTugas.classList.add("hidden");
    }
  } catch (error) {
    statusTugas.classList.add("hidden");
    errorTugas.textContent = "Gagal memuat tugas: " + error.message;
    errorTugas.classList.remove("hidden");
  }

  updateProgres();
}

// Membuat satu elemen tugas
function buatTugas(judul, selesai) {
  const li = document.createElement("li");
  li.className = "tugas-item flex items-center justify-between gap-3 py-2 border-b";
  li.dataset.selesai = String(selesai);

  const teks = document.createElement("span");
  teks.className = "judul-tugas flex-1";
  teks.textContent = judul;

  const tombolSelesai = document.createElement("button");
  tombolSelesai.textContent = "Tandai selesai";
  tombolSelesai.className = "text-sm text-green-700 hover:underline";

  const tombolHapus = document.createElement("button");
  tombolHapus.textContent = "Hapus";
  tombolHapus.className = "text-sm text-red-600 hover:underline";

  li.appendChild(teks);

  if (selesai) {
    terapkanSelesai(li);
  } else {
    li.appendChild(tombolSelesai);
  }
  li.appendChild(tombolHapus);

  // F5. Tandai selesai
  tombolSelesai.addEventListener("click", () => {
    terapkanSelesai(li);
    tombolSelesai.remove();
    updateProgres();
  });

  // F5. Hapus tugas
  tombolHapus.addEventListener("click", () => {
    li.remove();
    updateProgres();
  });

  return li;
}

// Memberi tampilan selesai pada satu tugas
function terapkanSelesai(li) {
  li.dataset.selesai = "true";
  li.querySelector(".judul-tugas").classList.add("line-through", "text-gray-400");
}

// Ringkasan progres: X dari Y tugas selesai
function updateProgres() {
  const semua = daftarTugas.querySelectorAll(".tugas-item");
  const selesai = daftarTugas.querySelectorAll('.tugas-item[data-selesai="true"]');
  progres.textContent = selesai.length + " dari " + semua.length + " tugas selesai";
}

// ===== F3. Mencari tugas =====
function filterTugas() {
  const kata = inputCari.value.trim().toLowerCase();
  const items = daftarTugas.querySelectorAll(".tugas-item");
  let adaCocok = false;

  items.forEach((li) => {
    const judul = li.querySelector(".judul-tugas").textContent.toLowerCase();
    if (judul.includes(kata)) {
      li.classList.remove("hidden");
      adaCocok = true;
    } else {
      li.classList.add("hidden");
    }
  });

  if (items.length > 0 && !adaCocok) {
    pesanKosong.classList.remove("hidden");
  } else {
    pesanKosong.classList.add("hidden");
  }
}

inputCari.addEventListener("input", filterTugas);

// ===== F4. Menambah tugas baru =====
function simpanTugas(judul) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sudahAda = Array.from(daftarTugas.querySelectorAll(".judul-tugas")).some(
        (el) => el.textContent.toLowerCase() === judul.toLowerCase()
      );

      if (sudahAda) {
        reject(new Error('Tugas "' + judul + '" sudah ada di daftar.'));
      } else {
        resolve({ title: judul, completed: false });
      }
    }, 1000);
  });
}

function tampilNotifikasi(pesan) {
  notifikasi.textContent = pesan;
  notifikasi.classList.remove("hidden");
  setTimeout(() => {
    notifikasi.classList.add("hidden");
  }, 3000);
}

formTugas.addEventListener("submit", async (event) => {
  event.preventDefault();
  errorForm.textContent = "";

  const judul = inputJudul.value.trim();

  if (idTerpilih === null) {
    errorForm.textContent = "Pilih anggota terlebih dahulu.";
    return;
  }
  if (judul.length === 0) {
    errorForm.textContent = "Judul tugas tidak boleh kosong.";
    return;
  }
  if (judul.length < 5) {
    errorForm.textContent = "Judul tugas minimal 5 karakter.";
    return;
  }

  try {
    tombolSimpan.disabled = true;
    tombolSimpan.textContent = "Menyimpan...";

    const tugasBaru = await simpanTugas(judul);

    daftarTugas.appendChild(buatTugas(tugasBaru.title, tugasBaru.completed));
    updateProgres();
    filterTugas();
    inputJudul.value = "";
    tampilNotifikasi("Tugas berhasil ditambahkan.");
  } catch (error) {
    errorForm.textContent = error.message;
  } finally {
    tombolSimpan.textContent = "Simpan";
    tombolSimpan.disabled = false;
  }
});

// Mulai: ambil daftar anggota saat halaman dibuka
muatAnggota();