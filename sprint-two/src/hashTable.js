

var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._size++;
  if (this._size > 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
  var bucket = this._storage.get(index);

  var tupleFound = false;
  if (!bucket) {
    var bucket = [];
    this._storage.set(index, bucket);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        var tupleFound = true;
        tuple[1] = v;
        break;
      }
    }
  }
  if (!tupleFound) {
    bucket.push([k, v]);
    this._size++;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return null;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._size--;
  if (this._size > 0.25 * this._limit) {
    this.resize(this._limit / 2);
  }
  var bucket = this._storage.get(index);

  if (!bucket) {
    return null;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._size = 0;
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);

  this._storage.each((bucket, index) => {
    for (var i = 0; i < bucket.length; i++) {
      this.insert(oldStorage[index][i], oldStorage[index][i + 1]);
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
