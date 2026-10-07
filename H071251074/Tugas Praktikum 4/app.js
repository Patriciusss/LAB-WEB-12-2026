const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko", nilaiTugas: [45, 45, 45] }
];

const angka = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function validasiAngka(nama) {
    for (let i = 0; i < nama.length; i++) {
        for (let j = 0; j < angka.length; j++) {
            if (nama[i] === angka[j]) {
                return false;
            }
        }
    }
    return true;
}

function hitungRataRata(nilaiArray) {
    let total = 0;
    for (let i = 0; i < nilaiArray.length; i++) {
        total += nilaiArray[i];
    }
    return total / nilaiArray.length;
}

function tentukanStatus(rataRata) {
    if (rataRata >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}

function tentukanPredikat(rataRata) {
    if (rataRata >= 90) {
        return "A";
    } else if (rataRata >= 80) {
        return "B";
    } else if (rataRata >= 70) {
        return "C";
    } else if (rataRata >= 60) {
        return "D";
    } else {
        return "E";
    }
}

const namaAsisten = prompt("Masukkan nama asisten lab:");

if (namaAsisten.trim() !== "" && validasiAngka(namaAsisten)) {
    const hasilEvaluasi = [];
    for (let i = 0; i < dataPraktikan.length; i++) {
        const praktikan = dataPraktikan[i];
        const rataRata = hitungRataRata(praktikan.nilaiTugas);
        const status = tentukanStatus(rataRata);
        const predikat = tentukanPredikat(rataRata);

        hasilEvaluasi.push({
            nama: praktikan.nama,
            nilaiTugas: praktikan.nilaiTugas,
            rataRata: Math.round(rataRata * 100) / 100,
            predikat: predikat,
            status: status
        });
    }   

    document.write('<div class="max-w-4xl mx-auto px-4 py-16">');
    document.write('<h1 class="text-4xl font-bold text-center text-blue-600 mb-2">Sistem Evaluasi Praktikum</h1>');
    document.write('<p class="text-center text-gray-600 text-sm mb-12">Selamat Datang <span class="font-semibold text-blue-600">' + namaAsisten + '!</span></p>');
    document.write('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">');

    for (let i = 0; i < hasilEvaluasi.length; i++) {
        const hasil = hasilEvaluasi[i];
        const statusBg = hasil.status === "Lulus" ? "bg-emerald-200 text-emerald-800" : "bg-red-200 text-red-800";

        document.write('<div class="bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden">');
        document.write('<div class="bg-blue-300 px-6 py-4">');
        document.write('<h2 class="text-2xl font-bold text-blue-900">' + hasil.nama + '</h2>');
        document.write('</div>');
        document.write('<div class="bg-amber-50 px-6 py-4 space-y-3">');
        document.write('<p class="text-sm"><span class="font-semibold text-blue-600">Nilai Tugas:</span> ' + hasil.nilaiTugas.join(', ') + '</p>');
        document.write('<p class="text-sm"><span class="font-semibold text-blue-600">Rata-rata:</span> ' + hasil.rataRata + '</p>');
        document.write('<p class="text-sm"><span class="font-semibold text-blue-600">Predikat:</span> <span class="bg-blue-100 px-2 py-1 rounded text-blue-700 font-bold">' + hasil.predikat + '</span></p>');
        document.write('</div>');
        document.write('<div class="' + statusBg + ' px-6 py-3 text-center font-bold text-base">');
        document.write(hasil.status);
        document.write('</div>');
        document.write('</div>');
    }

    document.write('</div>');
    document.write('</div>');

    console.log("Hasil Evaluasi Praktikum:");
    console.log(hasilEvaluasi);

} else {
    document.write('<div class="min-h-screen flex items-center justify-center px-4">');
    document.write('<div class="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">');

    document.write('<div class="bg-red-300 px-6 py-4">');
    document.write('<h2 class="text-2xl font-bold text-red-900 text-center">Akses Ditolak</h2>');
    document.write('</div>');

    document.write('<div class="bg-amber-50 px-6 py-8 text-center space-y-4">');
    document.write('<p class="text-gray-700 font-semibold">Nama asisten lab wajib diisi dan tidak mempunyai angka!</p>');
    document.write('<p class="text-sm text-gray-600">Silakan masukkan nama asisten lab untuk melanjutkan ke Sistem Evaluasi Praktikum.</p>');
    document.write('</div>');

    document.write('</div>');
    document.write('</div>');
}