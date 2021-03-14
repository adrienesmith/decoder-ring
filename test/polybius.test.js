const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("polybius function exists", () => {
        expect(polybius).to.exist;
    });

    it("should encode a message to a string of number pairs", () => {
        const expected = "4432423352125413";
        const actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it("should decode a string of number pairs to a message", () => {
        const expected = "th(i/j)nkful";
        const actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when encoding", () => {
        const expected = "4432423352 125413";
        const actual = polybius("think ful");
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces when decoding", () => {
        const expected = "th(i/j)nk ful";
        const actual = polybius("4432423352 125413", false);
        expect(actual).to.equal(expected);
    });

    it("should encode both i and j to 42", () => {
        const expected = "4242121245";
        const actual = polybius("jiffy");
        expect(actual).to.equal(expected);
    });

    it("should display both i and j when decoding 42", () => {
        const expected = "(i/j)(i/j)ffy";
        const actual = polybius("4242121245", false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "4432423352125413";
        const actual = polybius("Thinkful");
        expect(actual).to.equal(expected);
    });


});    