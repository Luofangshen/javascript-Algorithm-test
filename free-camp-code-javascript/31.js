/*
找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。

这道题暂时解不出来。。。。。。。。。。以后再思考吧（应该是数学没学好= = 算法想不出来）

要用到欧几里得算法解最小公倍数
 */

function smallestCommons(arr) {
  let a = arr[0] >= arr[1] ? arr[1] : arr[0]
  let b = arr[0] >= arr[1] ? arr[0] : arr[1]
  let newArr = []
  let sum = 1
  for (let i = a; i <= b; i++) {
    newArr.push(i)
  }
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
  newArr = newArr.map((num, index) => {
    if (prime(num)) {
      return num
    } else {
      let sum = 1
      for (let i = 2; i < num; i++) {
        if (prime(i) && num % i === 0) {
          sum *= i
        }
      }
      return sum
    }
  })
  console.log(newArr)
  newArr.forEach(num => {
    sum *= num
  })
  console.log(sum)
  return sum;
}

smallestCommons([1, 13]);