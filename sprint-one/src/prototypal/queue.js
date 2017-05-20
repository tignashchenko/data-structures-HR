var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.firstIndex = 0;
  someInstance.lastIndex = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

queueMethods.dequeue = function() {
  var poppedValue = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  if (this.lastIndex - this.firstIndex) {
    this.firstIndex++;
  }
  return poppedValue;
};

queueMethods.size = function() {
  return this.lastIndex - this.firstIndex;
};
