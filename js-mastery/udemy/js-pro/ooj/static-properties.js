/**
 * Static Properties
 * Modern JS also offers 'static properties', where individual pieces of data are on the class, not on instances
 * Other oo languages might say 'class attribute' or 'class properties'
 */

class CatWithStaticProp {
  constructor(name) {
    this.name = name;
  }

  // all instances of cats are the same species;
  // it doesn't vary from one cat to another
  static genusSpecies = "feline catus";

  describe() {
    return `${this.name} is a ${CatWithStaticProp.genusSpecies}`;
  }
}

const blue = new CatWithStaticProp('Blue')
console.log(CatWithStaticProp.genusSpecies);
console.log(blue);


