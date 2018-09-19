/*
我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

最小的数字并非总在最前面。
 */

function sumAll(arr) {
  let sum = 0
  arr = arr.sort((a, b) => a-b)
  for (let i = +arr[0]; i <= +arr[1]; i++) {
    sum += i
  }
  console.log(sum)
  return sum
}

sumAll([10, 5]);