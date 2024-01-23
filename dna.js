const stringFilterDNA = (dna) => {
    let dnaSplice = "" ;
    dna.split("").map((value) => {
      value === "A" || value === "C" || value === "T" || value === "G"
        ? (dnaSplice += value)
        : "" ;
    });
    return dnaSplice;
  };
  console.log(stringFilterDNA("GfAsDyTTAC8A"));

module.exports = stringFilterDNA;