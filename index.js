let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//updates `object` with the given `key` and `value` (it is destructive):
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
 //deletes key from a clone of object and returns the new object
 let newObject = Object.assign({}, object)
 delete newObject[key]
 return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
//returns object without the delete key/value pair & modifies the original object
  delete object[key]
  return object
}
