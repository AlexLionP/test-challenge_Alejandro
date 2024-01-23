const stringFilterDNA = require('../dna.js');

test('Recives a string and removes any non-cononical DNA bases', () => {
    expect(stringFilterDNA("GfAsDyTTAC8A")).toBe("GATTACA");
})

test('Recives a empty string and gives an empty string', () => {
    expect(stringFilterDNA("")).toBe("");
})