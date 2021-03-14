const { expect } = require("chai");
const caesar = require("../src/caesar");


describe("caesar", () => {
    it("caesar function exists", () => {
        expect(caesar).to.exist;
    });

    it("should encode a message when given the shift amount", () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });

    it("should decode a message by shifting the letters in the opposite direction", () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should encode a message even if the shift goes 'off' the alphabet edge", () => {
        const expected = "cheud";
        const actual = caesar("zebra", 3);
        expect(actual).to.equal(expected);
    });

    it("should decode a message even if the shift goes 'off' the alphabet edge", () => {
        const expected = "zebra";
        const actual = caesar("cheud", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const expected = "thinkful";
        const actual = caesar("WKLQNIXO", 3, false);
        expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is when encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is when decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("should return false if shift is not present", () =>{
        const actual = caesar("wklqnixo");
        expect(actual).to.be.false;
    });

    it("should return false if shift is equal to 0", () =>{
        const actual = caesar("wklqnixo", 0);
        expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () =>{
        const actual = caesar("wklqnixo", 26);
        expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () =>{
        const actual = caesar("wklqnixo", -26);
        expect(actual).to.be.false;
    });
})