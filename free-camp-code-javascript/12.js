/*
比较字符串

（蛤蟆可以吃队友，也可以吃对手）

如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到
 */

function mutation(arr) {
  // 请把你的代码写在这里
  let flag = true
  arr[0] = arr[0].toLowerCase()
  arr[1] = arr[1].toLowerCase()
  let strArr = arr[1].split('')
  strArr.forEach((str, index) => {
    if (arr[0].indexOf(str) === -1) {
      flag = false
    } 
  })
  console.log(flag)
  return flag
}

mutation(["hello", "neo"]);