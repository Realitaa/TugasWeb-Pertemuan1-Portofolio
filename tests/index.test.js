import { readFileSync } from "node:fs";
import { describe, expect, test, beforeEach } from "vitest";

const html = readFileSync("index.html", "utf-8");

beforeEach(() => {
    document.documentElement.innerHTML = html;
});

describe("Semantic HTML", () => {
    test("memiliki elemen header", () => {
        expect(document.querySelector("header")).not.toBeNull();
    });

    test("memiliki navigation di dalam header", () => {
        const header = document.querySelector("header");

        expect(header.querySelector("nav")).not.toBeNull();
    });

    test("memiliki tepat satu main", () => {
        expect(document.querySelectorAll("main")).toHaveLength(1);
    });

    test("memiliki minimal satu section di dalam main", () => {
        const sections = document.querySelectorAll("main > section");

        expect(sections.length).toBeGreaterThan(0);
    });

    test("setiap section utama memiliki heading h2", () => {
        const sections = document.querySelectorAll("main > section");

        sections.forEach((section) => {
            expect(section.querySelector(":scope > h2")).not.toBeNull();
        });
    });

    test("memiliki minimal satu article", () => {
        const articles = document.querySelectorAll("article");

        expect(articles.length).toBeGreaterThan(0);
    });

    test("setiap article memiliki heading h3", () => {
        const articles = document.querySelectorAll("article");

        articles.forEach((article) => {
            expect(article.querySelector(":scope > h3")).not.toBeNull();
        });
    });

    test("memiliki elemen aside", () => {
        expect(document.querySelector("aside")).not.toBeNull();
    });

    test("memiliki elemen footer", () => {
        expect(document.querySelector("footer")).not.toBeNull();
    });
});

describe("Heading Hierarchy", () => {
    test("memiliki tepat satu h1", () => {
        expect(document.querySelectorAll("h1")).toHaveLength(1);
    });

    test("h1 berisi nama pemilik halaman", () => {
        const h1 = document.querySelector("h1");

        expect(h1.textContent.trim()).toBe("Reza Mulia Putra");
    });

    test("h2 hanya digunakan sebagai heading section utama", () => {
        const h2s = document.querySelectorAll("h2");

        h2s.forEach((h2) => {
            expect(h2.parentElement.tagName).toBe("SECTION");
        });
    });

    test("h3 digunakan sebagai heading turunan", () => {
        const h3s = document.querySelectorAll("h3");

        h3s.forEach((h3) => {
            const parent = h3.parentElement;

            expect(
                parent.tagName === "ARTICLE" ||
                parent.tagName === "ASIDE"
            ).toBe(true);
        });
    });

    test("tidak menggunakan heading level yang melompati hierarchy", () => {
        const headings = document.querySelectorAll("h1, h2, h3");

        let previousLevel = 0;

        headings.forEach((heading) => {
            const currentLevel = Number(heading.tagName.substring(1));

            expect(currentLevel - previousLevel).toBeLessThanOrEqual(1);

            previousLevel = currentLevel;
        });
    });
});

describe("Accessibility", () => {
    test("html memiliki atribut lang", () => {
        expect(document.documentElement.lang).toBe("id");
    });

    test("semua gambar memiliki atribut alt", () => {
        const images = document.querySelectorAll("img");

        images.forEach((image) => {
            expect(image.hasAttribute("alt")).toBe(true);
        });
    });

    test("semua input memiliki label", () => {
        const inputs = document.querySelectorAll(
            "input:not([type='hidden'])"
        );

        inputs.forEach((input) => {
            const id = input.getAttribute("id");

            expect(id).not.toBeNull();

            const label = document.querySelector(
                `label[for="${id}"]`
            );

            expect(label).not.toBeNull();
        });
    });

    test("textarea memiliki label", () => {
        const textarea = document.querySelector("textarea");

        if (textarea) {
            const id = textarea.getAttribute("id");

            expect(id).not.toBeNull();

            const label = document.querySelector(
                `label[for="${id}"]`
            );

            expect(label).not.toBeNull();
        }
    });

    test("navigation memiliki accessible label", () => {
        const nav = document.querySelector("nav");

        expect(nav.getAttribute("aria-label")).not.toBeNull();
    });
});

describe("Formulir", () => {
    test("memiliki elemen form", () => {
        expect(document.querySelector("form")).not.toBeNull();
    });

    test("form memiliki fieldset", () => {
        const form = document.querySelector("form");

        expect(form.querySelector("fieldset")).not.toBeNull();
    });

    test("fieldset memiliki legend", () => {
        const fieldset = document.querySelector("fieldset");

        expect(fieldset.querySelector("legend")).not.toBeNull();
    });

    test("memiliki input nama", () => {
        const input = document.querySelector("#nama");

        expect(input).not.toBeNull();
        expect(input.type).toBe("text");
    });

    test("input nama wajib diisi", () => {
        const input = document.querySelector("#nama");

        expect(input.required).toBe(true);
    });

    test("memiliki input email dengan tipe email", () => {
        const input = document.querySelector("#email");

        expect(input).not.toBeNull();
        expect(input.type).toBe("email");
    });

    test("input email wajib diisi", () => {
        const input = document.querySelector("#email");

        expect(input.required).toBe(true);
    });

    test("memiliki textarea pesan", () => {
        const textarea = document.querySelector("#pesan");

        expect(textarea).not.toBeNull();
    });

    test("textarea pesan wajib diisi", () => {
        const textarea = document.querySelector("#pesan");

        expect(textarea.required).toBe(true);
    });

    test("memiliki tombol submit", () => {
        const button = document.querySelector(
            "button[type='submit']"
        );

        expect(button).not.toBeNull();
    });

    test("memiliki tombol reset", () => {
        const button = document.querySelector(
            "button[type='reset']"
        );

        expect(button).not.toBeNull();
    });
});

describe("Media", () => {
    test("memiliki gambar", () => {
        expect(document.querySelector("img")).not.toBeNull();
    });

    test("gambar menggunakan alt text yang bermakna", () => {
        const images = document.querySelectorAll("img");

        images.forEach((image) => {
            expect(image.alt.trim().length).toBeGreaterThan(0);
        });
    });

    test("memiliki figure", () => {
        expect(document.querySelector("figure")).not.toBeNull();
    });

    test("figure memiliki figcaption", () => {
        const figure = document.querySelector("figure");

        expect(figure.querySelector("figcaption")).not.toBeNull();
    });
});

describe("Navigasi", () => {
    test("nav memiliki daftar navigasi", () => {
        const nav = document.querySelector("nav");

        expect(nav.querySelector("ul")).not.toBeNull();
    });

    test("navigasi memiliki link", () => {
        const links = document.querySelectorAll("nav a");

        expect(links.length).toBeGreaterThan(0);
    });

    test("semua link navigasi menggunakan anchor internal", () => {
        const links = document.querySelectorAll("nav a");

        links.forEach((link) => {
            const href = link.getAttribute("href");

            expect(href).toMatch(/^#/);
        });
    });

    test("semua anchor internal memiliki target yang tersedia", () => {
        const links = document.querySelectorAll("a[href^='#']");

        links.forEach((link) => {
            const href = link.getAttribute("href");

            const target = document.querySelector(href);

            expect(target).not.toBeNull();
        });
    });
});

describe("SEO & Meta Tags", () => {
    test("memiliki title", () => {
        const title = document.querySelector("title");

        expect(title).not.toBeNull();
        expect(title.textContent.trim().length).toBeGreaterThan(0);
    });

    test("memiliki meta description", () => {
        const description = document.querySelector(
            'meta[name="description"]'
        );

        expect(description).not.toBeNull();

        expect(
            description.getAttribute("content").trim().length
        ).toBeGreaterThan(0);
    });

    test("memiliki meta viewport", () => {
        const viewport = document.querySelector(
            'meta[name="viewport"]'
        );

        expect(viewport).not.toBeNull();

        expect(viewport.getAttribute("content"))
            .toContain("width=device-width");
    });

    test("memiliki meta author", () => {
        const author = document.querySelector(
            'meta[name="author"]'
        );

        expect(author).not.toBeNull();
    });

    test("memiliki Open Graph title", () => {
        const ogTitle = document.querySelector(
            'meta[property="og:title"]'
        );

        expect(ogTitle).not.toBeNull();
    });

    test("memiliki Open Graph description", () => {
        const ogDescription = document.querySelector(
            'meta[property="og:description"]'
        );

        expect(ogDescription).not.toBeNull();
    });

    test("memiliki Open Graph type", () => {
        const ogType = document.querySelector(
            'meta[property="og:type"]'
        );

        expect(ogType).not.toBeNull();
        expect(ogType.getAttribute("content")).toBe("website");
    });

    test("memiliki Open Graph image", () => {
        const ogImage = document.querySelector(
            'meta[property="og:image"]'
        );

        expect(ogImage).not.toBeNull();

        expect(
            ogImage.getAttribute("content").trim().length
        ).toBeGreaterThan(0);
    });
});

describe("HTML5 Bonus Features", () => {
    test("menggunakan elemen time", () => {
        expect(document.querySelector("time")).not.toBeNull();
    });

    test("elemen time memiliki datetime", () => {
        const times = document.querySelectorAll("time");

        times.forEach((time) => {
            expect(time.getAttribute("datetime")).not.toBeNull();
        });
    });

    test("menggunakan input type date", () => {
        expect(
            document.querySelector('input[type="date"]')
        ).not.toBeNull();
    });

    test("menggunakan input type color", () => {
        expect(
            document.querySelector('input[type="color"]')
        ).not.toBeNull();
    });

    test("menggunakan input type range", () => {
        expect(
            document.querySelector('input[type="range"]')
        ).not.toBeNull();
    });
});