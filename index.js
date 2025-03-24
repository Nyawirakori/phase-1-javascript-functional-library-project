// index.js

// myEach
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }
  return collection;
}

// myMap
function myMap(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

// myReduce
function myReduce(collection, callback, initialValue) {
    let accumulator;
    let startIndex = 0;

    if (initialValue === undefined) {
        if (Array.isArray(collection)){
            accumulator = collection[0];
            startIndex = 1;
        } else {
            const keys = Object.keys(collection);
            accumulator = collection[keys[0]];
            startIndex = 1;
        }

    } else {
        accumulator = initialValue;
    }

    if(Array.isArray(collection)) {
        for (let i = startIndex; i < collection.length; i++){
            accumulator = callback(accumulator, collection[i], i, collection);
        }
    } else {
        const keys = Object.keys(collection);
        for (let i = startIndex; i < keys.length; i++){
            accumulator = callback(accumulator, collection[keys[i]], keys[i], collection);
        }
    }

    return accumulator;
}

// myFind
function myFind(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return undefined;
}

// myFilter
function myFilter(collection, callback) {
    const result = [];
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(callback(collection[i], i, collection)){
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection){
            if(collection.hasOwnProperty(key) && callback(collection[key], key, collection)){
                result.push(collection[key]);
            }
        }
    }
    return result;
}

//mySize
function mySize(collection){
    if(Array.isArray(collection)){
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

//myFirst
function myFirst(collection, n = 1){
    if(Array.isArray(collection)){
        if (n === 1) {
            return collection[0];
        }
        return collection.slice(0, n);
    } else {
        const values = Object.values(collection);
        if (n === 1){
            return values[0];
        }
        return values.slice(0, n);
    }
}

//myLast
function myLast(collection, n = 1){
    if(Array.isArray(collection)){
        if (n === 1){
            return collection[collection.length - 1];
        }
        return collection.slice(-n);
    } else {
        const values = Object.values(collection);
        if (n === 1){
            return values[values.length -1];
        }
        return values.slice(-n);
    }
}

//myKeys
function myKeys(obj){
    return Object.keys(obj);
}

//myValues
function myValues(obj){
    return Object.values(obj);
}

