/*
给一个正整数num，返回小于或等于num的斐波纳契奇数之和。

斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。

例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。

提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
 */

function sumFibs(num) {
  let i = 0
  let sum = 0
  function fibonacci(num) {
    if (num <= 2) {
      return 1
    } else {
      let sum = 0
      let sum1 = 1
      let sum2 = 1
      for (let i = 3; i <= num; i++) {
        sum = sum1 + sum2
        sum1 = sum2
        sum2 = sum
      }
      return sum
    }
  }
  while (fibonacci(++i) <= num) {
    if (fibonacci(i) % 2 !== 0) {
      sum += fibonacci(i)
    }
  }
  return sum;
}

sumFibs(75025);