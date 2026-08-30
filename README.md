# Landing Page Pribadi

Landing page pribadi sederhana yang dibuat menggunakan **HTML5 murni** sebagai tugas mata kuliah Web. Website live di: https://portofolio-web.realitaa.dev

Proyek ini berfokus pada penerapan struktur HTML semantik, accessibility dasar, formulir HTML5, SEO/meta tags, serta validasi dokumen HTML.

## Tujuan

Proyek dibuat untuk memenuhi kriteria tugas landing page pribadi, meliputi:

- Semantic HTML5
- Heading hierarchy yang benar
- Formulir interaktif dengan validasi native HTML
- Penggunaan gambar dengan atribut `alt`
- Navigasi menggunakan anchor internal
- SEO dan meta tags
- Open Graph metadata
- Fitur HTML5 tambahan

Proyek **tidak menggunakan CSS maupun JavaScript** karena fokus tugas adalah penerapan HTML5.

## Isi Halaman

Halaman terdiri dari beberapa bagian utama:

- **Header** — nama dan tagline
- **Navigation** — navigasi menuju setiap bagian halaman
- **Tentang Saya** — informasi singkat dan profil
- **Keahlian** — daftar kemampuan frontend, backend, dan teknologi lain
- **Proyek** — contoh proyek yang dapat diganti dengan proyek pribadi
- **Pendidikan** — informasi pendidikan
- **Kontak** — formulir kontak HTML5
- **Footer** — informasi copyright dan kontak

## Teknologi

- HTML5
- Node.js
- pnpm
- Vitest
- Happy DOM
- Nu HTML Checker

Tidak terdapat framework frontend, CSS framework, maupun JavaScript runtime pada halaman.

## Testing

Proyek menggunakan **Vitest** dan **Happy DOM** untuk melakukan automated testing terhadap struktur dan requirement halaman.

Test mencakup:

- Semantic HTML
- Heading hierarchy
- Accessibility dasar
- Formulir
- Media
- Navigasi
- SEO dan meta tags
- Open Graph
- Fitur HTML5 tambahan

Jalankan test dengan:

```bash
pnpm test:run
```

Saat ini terdapat **51 automated tests**.

## Validasi HTML

Validitas markup HTML diperiksa menggunakan **Nu HTML Checker**.

Jalankan:

```bash
pnpm validate:html
```

Validator dikonfigurasi untuk gagal apabila terdapat error maupun warning.

## Pemeriksaan Lengkap

Untuk menjalankan seluruh pemeriksaan sekaligus:

```bash
pnpm check
```

Perintah tersebut menjalankan:

```text
Vitest
  ↓
51 automated tests
  ↓
Nu HTML Checker
```

Dengan demikian, `pnpm check` menjadi quality check utama sebelum proyek dikumpulkan.

## Instalasi

Pastikan Node.js dan pnpm sudah tersedia.

Install dependency:

```bash
pnpm install
```

Kemudian jalankan:

```bash
pnpm check
```

Jika seluruh pemeriksaan berhasil, hasilnya akan menunjukkan:

```text
Test Files  1 passed
Tests       51 passed
```

dan Nu HTML Checker selesai tanpa error.
