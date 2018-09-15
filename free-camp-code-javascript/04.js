/*
找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。
 */

function findLong(str) {
  let strArr = str.split(' ')
  strArr = strArr.map((str, index) => str.length)
  console.log(Math.max.apply(null, strArr))
  return Math.max(...strArr)
}

findLong('What if we try a super-long word such as otorhinolaryngology')
