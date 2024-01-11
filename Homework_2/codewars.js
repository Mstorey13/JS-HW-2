// Complimentary DNA
function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
      return DNAStrand.pairs[c]
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

// Are There Any Arrows Left?

function anyArrows(arrows){
  return arrows.filter((el) => el['damaged']).length < arrows.length;
}