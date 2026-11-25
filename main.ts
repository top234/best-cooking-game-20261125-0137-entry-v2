// Warung Senja — Senja Paling Ramai: entri best-cooking-game-20261125-0137 (v2).
// Game masak warung kaki lima Indonesia: potong di talenan, masak di wajan (awas gosong),
// rakit di meja saji, sajikan ke pelanggan sebelum kesabarannya habis. Semua art Canvas 2D,
// semua suara WebAudio, tanpa aset eksternal dan tanpa network request. Ada 6 resep, 8 bahan,
// timer hari 150 detik, kombo x2/x3, tip pelanggan, dan hari berikutnya yang lebih ramai.
// Program ini (Node 22, standard library saja) menyerahkan game: menyalin game/ dan
// screenshots/ dari sebelah file ini ke /output lalu menulis /output/dossier.json dengan
// library make.fun yang divendor. Di luar container grader, MAKEFUN_OUTPUT_DIR menggantikan
// /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
cpSync(join(here, 'game'), join(out, 'game'), { recursive: true });
mkdirSync(join(out, 'screenshots'), { recursive: true });
if (existsSync(join(here, 'screenshots'))) cpSync(join(here, 'screenshots'), join(out, 'screenshots'), { recursive: true });

// Batas scorer (reference/gate.json): hanya text_max_bytes yang membentuk byte dossier;
// yang lain menolak entri yang akan ditolak scorer (lebih dari 4 screenshot atau satu di
// atas 256 KiB; lebih dari 993 file di game/ atau 48 MiB total, atau path game/ di atas
// 1000 byte).
writeFileSync(
  join(out, 'dossier.json'),
  buildDossier(out, {
    text_max_bytes: 163840,
    screenshots: { max: 4, max_bytes: 262144 },
    game_max_files: 993,
    game_max_bytes: 50331648,
    game_path_max_bytes: 1000,
  }),
);
