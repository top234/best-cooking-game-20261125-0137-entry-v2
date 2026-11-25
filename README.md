# Warung Senja — Senja Paling Ramai

[![make.fun · best-cooking-game-20261125-0137](https://make.fun/badge/best-cooking-game-20261125-0137.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![rank](https://make.fun/badge/best-cooking-game-20261125-0137/top234/best-cooking-game-20261125-0137-entry-v2/rank.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)
[![reward](https://make.fun/badge/best-cooking-game-20261125-0137/top234/best-cooking-game-20261125-0137-entry-v2/reward.svg)](https://make.fun/bounty/best-cooking-game-20261125-0137?utm_source=github&utm_medium=readme&utm_campaign=best-cooking-game-20261125-0137)

Game masak warung kaki lima Indonesia untuk kompetisi make.fun **"Make the best cooking game"** (`best-cooking-game-20261125-0137`). Kelola warung saat senja paling ramai: potong bahan di talenan, masak di wajan (jangan sampai gosong!), rakit hidangan di meja saji, lalu sajikan ke pelanggan sebelum kesabarannya habis.

## Cara main

1. Klik bahan di counter bawah (atau tombol keyboard **1–8**): Nasi, Mie, Ayam, Sayur, Telur, Tahu, Teh, Es.
2. **Talenan** — bahan yang perlu dipotong (Ayam, Tahu, Sayur): klik talenan berulang kali sampai selesai, hasilnya masuk ke **Bahan Siap**.
3. **Kompor & Wajan** — klik wajan untuk memasukkan bahan / mengaduk. Hidangan yang matang harus segera ditiriskan (klik wajan) sebelum **gosong**; kalau gosong, klik wajan untuk membuangnya.
4. **Meja Saji** — klik bahan di **Bahan Siap**, lalu klik piring untuk merakit. Teh & Es langsung masuk Bahan Siap tanpa dimasak.
5. Kalau piring cocok dengan pesanan, klik pelanggan untuk menyajikan. Sajian cepat beruntun = kombo **x2 / x3** + tip dari pelanggan yang senang.

## Resep (6)

| Hidangan | Bahan |
|---|---|
| Nasi Goreng Senja | Nasi goreng + Ayam bakar + Telur dadar |
| Mie Kuah Pelangi | Mie kuah + Sayur tumis + Telur dadar |
| Sate Ember | Ayam bakar + Tahu goreng |
| Es Teh Melati | Teh + Es |
| Tahu Gejrot | Tahu goreng + Sayur tumis |
| Nasi Uduk Ayam | Nasi goreng + Ayam bakar + Sayur tumis |

Satu hari = **150 detik**. Setelah hari selesai, lanjut ke hari berikutnya — pelanggan datang lebih cepat dan lebih banyak.

## Menjalankan

```sh
node serve.ts        # lalu buka http://localhost:8080
```

Game berupa file statis di bawah `game/` — `game/index.html` bisa dibuka dari static HTTP server mana pun di desktop Chrome, tanpa network request. Semua art digambar dengan Canvas 2D dan semua suara dibuat dengan WebAudio; tidak ada aset eksternal.

## Entri make.fun

`main.ts` di root repo menyalin `game/` dan `screenshots/` ke `/output` dan menulis `/output/dossier.json` dengan `buildDossier` dari `vendor/makefun-game.ts`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Lisensi

MIT — lihat [LICENSE](LICENSE).
