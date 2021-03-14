const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("substitution function exists", () => {
        expect(substitution).to.exist;
    });

    it("should encode a message by substituting characters from alphabet", () => {
        const expected = "jrufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it("should encode, even if alphabet contains special characters", () => {
        const expected = "*rufscpw";
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthd*pzibev");
        expect(actual).to.equal(expected);
    });

    it("should decode, even if alphabet contains special characters", () => {
        const expected = "thinkful";
        const actual = substitution("*rufscpw", "xoyqmcgrukswaflnthd*pzibev", false);
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces when encoding", () => {
        const expected = "jrufs cpw";
        const actual = substitution("think ful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    
    it("should preserve spaces when decoding", () => {
        const expected = "think ful";
        const actual = substitution("jrufs cpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it("should return false if the alphabet parameter isn't exactly 26 characters", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibe");
        expect(actual).to.be.false;
    });

    it("should return false if all characters in the alphabet parameter are not unique", () => {
        const actual = substitution("thinkful", "xoxqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.false;
    });

    it("should ignore capital letters", () => {
        const expected = "jrufscpw";
        const actual = substitution("Thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
});    