function DNAStrand(dna){
  return dna.replace(/A/g, "t").replace(/T/g, "a").replace(/G/g, "c").replace(/C/g, "g").toUpperCase()
}