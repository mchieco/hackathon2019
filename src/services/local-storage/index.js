function get(key) {
  return new Promise(resolve => {
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem(key);
    resolve(JSON.parse(retrievedObject));
  });
}
function set(key, value) {
  return new Promise(resolve => {
    localStorage.setItem(key, JSON.stringify(value));
    resolve();
  });
}
function clear(key) {
  return new Promise(resolve => {
    localStorage.clear(key);
    resolve();
  });
}

export default { get, set, clear };
