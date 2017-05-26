var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
  var result = this.storage[this.start];
  delete this.storage[this.start];

  this.size() && this.start++;

  return result;
};

queueMethods.size = function() {
  return this.end - this.start;
};
