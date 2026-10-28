# Kedai Kopi Senja

Halaman pemesanan mandiri untuk tablet di meja pelanggan. Dibuat dengan React (Vite), JavaScript (JSX), dan Tailwind CSS.

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:5173).

## Fitur

- Menampilkan semua menu beserta harga, dengan filter kategori (Semua, Kopi, Non-Kopi, Makanan).
- Tombol Detail membuka deskripsi menu tanpa memengaruhi menu lain.
- Menu yang habis tidak bisa dipesan.
- Jumlah pesanan dan total harga selalu sama di bagian atas halaman dan di ringkasan pesanan.
- Form nama dan nomor meja dengan validasi. Pesanan kosong atau data belum lengkap akan ditolak dengan pesan.
- Setelah pesanan terkirim, muncul ucapan terima kasih, form dan pesanan dikosongkan.

## Struktur state

Seluruh state utama ada di `App.jsx`: kategori aktif, keranjang (`{ [id]: jumlah }`), dan status pesanan terkirim. Total dihitung dari keranjang, bukan disimpan sebagai state terpisah.
