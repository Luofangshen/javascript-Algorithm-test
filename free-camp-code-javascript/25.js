/*
检查一个值是否是基本布尔类型，并返回 true 或 false。

基本布尔类型即 true 和 false。
 */

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === true || bool === false) {
    return true
  } else {
    return false
  }
}

console.log(boo(null))