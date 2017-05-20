var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.sizeOfStorage = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.sizeOfStorage] = value;
  this.sizeOfStorage++;
};

stackMethods.pop = function() {
  if (this.sizeOfStorage > 0) {
    this.sizeOfStorage--;
  }
  var poppedValue = this.storage[this.sizeOfStorage];
  delete this.storage[this.sizeOfStorage];
  return poppedValue;
};

stackMethods.size = function() {
  return this.sizeOfStorage;
};
