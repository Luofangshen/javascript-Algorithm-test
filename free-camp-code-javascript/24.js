/*
从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。
 */

function fearNotLetter(str) {
  let num = +(str.charCodeAt(str.length - 1) - str.charCodeAt(0)) + 1
  let arr = []
  for (let i = 0; i < num; i++) {
    if (str.indexOf(String.fromCharCode(str.charCodeAt(0) + i)) === -1) {
      arr.push(String.fromCharCode(str.charCodeAt(0) + i))
    }
  }
  console.log(arr)
  return arr
}

fearNotLetter("abcccx");