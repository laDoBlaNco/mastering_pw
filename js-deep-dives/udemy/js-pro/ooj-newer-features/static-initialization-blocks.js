// Static Initialization Block - ES2022
class MyClass {
  // a static block of code gets run exactly once when the class is loaded
  static {
    console.log("CLASS IS LOADED");
  }
  // no matter how many times we use the class after its only runs that first time
  // with new instances it doesn't run, just when JS loads it for the first time.
  // mainly used for initialization of the class
  // The key is that it only needs to run one time in the beginning
}

// a very simple contrived example
class DatabaseConnection {
  static connection;

  static {
    // fake logic just to not crash the example
    const logic = Math.floor(Math.random() + 1);
    if (logic) {
      this.connection = this.loadProductionConnection();
    } else {
      this.connection = this.loadDevelopmentConnection();
    }
  }

  static loadProductionConnection() {}
  static loadDevelopmentConnection() {}
}
