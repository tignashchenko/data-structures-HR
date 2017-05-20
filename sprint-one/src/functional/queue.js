var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var firstIndex = 0;
  var lastIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function() {
    var poppedValue = storage[firstIndex];
    delete storage[firstIndex];
    if (lastIndex - firstIndex > 0) {
      firstIndex++;
    }
    return poppedValue;
  };

  someInstance.size = function() {
    return lastIndex - firstIndex;
  };

  return someInstance;
};
