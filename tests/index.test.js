import { describe, expect, test } from "vitest";

describe("Happy DOM", () => {
    test("dapat membuat dan membaca elemen HTML", () => {
        document.body.innerHTML = "<h1>Hello World</h1>";

        const heading = document.querySelector("h1");

        expect(heading).not.toBeNull();
        expect(heading.textContent).toBe("Hello World");
    });
});