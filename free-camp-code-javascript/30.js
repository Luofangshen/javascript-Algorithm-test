/*
求小于等于给定数值的质数之和。

只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。

给定的数不一定是质数。
 */

function sumPrimes(num) {
  let sum = 0
  function prime(num) {
    if (num === 1) {
      return false
    }
    let flag = true
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false
      } 
    } 
    return flag
  }
  for (let i = 1; i <= num; i++) {
    if (prime(i)) {
      sum += i
    }
  }
  console.log(sum)
  return sum;
}

sumPrimes(977);