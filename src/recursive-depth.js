
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    arr.map(i =>
        Array.isArray(i)
            ? (counter = Math.max(this.calculateDepth(i), counter))
            : counter
    );
    counter++;
    return counter;
  }
};