/*
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

这道题暂时解不出来。。。。。。。。。。以后再思考吧（应该是数学没学好= = 算法想不出来）

要用到欧几里得算法求出最大公约数
定理：两个整数的最大公约数等于其中较小的那个数和两数相除余数的最大公约数。最大公约数（Greatest Common Divisor）缩写为GCD

= =想到一种弱智的方法 ，全部乘积在循环 判断能整除全部的数得出直接输出,不过这个算法对于很大的数估计内存会溢出

 */

function smallestCommons(arr) {
  let a = arr[0] >= arr[1] ? arr[1] : arr[0]
  let b = arr[0] >= arr[1] ? arr[0] : arr[1]
  let newArr = []
  let sum = 1
  for (let i = a; i <= b; i++) {
    newArr.push(i)
  }
  function multiple(a, b) {
    for (let i = 1; i <= a * b; i++) {
      if (!(i % a) && !(i % b)) {
        return i
      }
    }
    return undefined
  }
  let mulArr = multiple(newArr[0], newArr[1])
  console.log(mulArr)
  for (let i = 2; i < newArr.length; i++) {
    mulArr = multiple(mulArr, newArr[i])
  }
  console.log(mulArr)
  return mulArr;
}

smallestCommons([20, 1]);

// 求最大公约数的算法 很简单 也很巧妙 说实话while循环真的好用 Vue源码也使用这个来提取Node到 documentfragment 在做批量修改及编译
function gcd(a, b) {
  if (a >= b) {
    let c = a
    a = b
    b = c
  }
  while (b % a) {
    let c = a
    a = b % a
    b = c
  }
  return a
}