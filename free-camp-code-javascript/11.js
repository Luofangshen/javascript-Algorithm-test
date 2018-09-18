/*
截断数组

返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */

function slasher(arr, howMany) {
  // 请把你的代码写在这里
  howMany = howMany > 0 ? howMany : 0
  let newArr = []
  for (let i = howMany; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  console.log(newArr)
  return newArr;
}

slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)
