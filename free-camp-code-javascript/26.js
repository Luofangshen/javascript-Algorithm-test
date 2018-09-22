/*
写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。

请参照下面验证判断中的例子。
 */

function unite(arr1, arr2, arr3) {
  let arr = Array.from(arguments)
  let arrOne = []
  arr.forEach(item => {
    arrOne = arrOne.concat(item)
  })
  let newArr = []
  let set = new Set(arrOne)
  for (let n of set) {
    if (n) {
      newArr.push(n)
    }
  }
  console.log(newArr)
  return newArr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);