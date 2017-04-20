/*
  Scenario:
  This is a MathLibrary being used by hundreds of developers
  and they all complaing that the method calculateProduct
  should be named multiply.

  How would we change the method name without breaking their projects?
*/
const MathLibrary = {
  calculateProduct(a, b) {
    return a * b;
  },
};

/*
  One approach is creating another method that does the
  exact same thing.

  Instead of having a duplicated method, whenever someone
  calls calculateProduct we can pass the call on to multiply:
*/
const MathLibrary = {
  /*
    Instead of assuming there's only going to be two arguments
    we can use the rest operator and spread operators
  */
  calculateProduct(...items) {
    return this.multiply(...items);
  },
  multiply(a, b) {
    return a * b;
  }
};
