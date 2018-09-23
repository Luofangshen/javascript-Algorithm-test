/*
将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
 */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = ''
  for (let n of str) {
    if (/[A-Z]/.test(n)) {
      newStr += '-' + n
    } else {
      newStr += n
    }
  }
  if (newStr.charAt(0) === '-') {
    newStr = newStr.slice(1)
  }
  let strArr = newStr.split(/[^A-Za-z0-9]+/g)
  strArr = strArr.map(str => str.toLowerCase())
  str = strArr.join('-')
  console.log(str)
  return str;
}

spinalCase('This Is Spinal Tap');