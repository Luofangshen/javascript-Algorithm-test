/*
句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。
 */

function capitalize(str) {
  str = str.toLowerCase()
  let strArr = str.split(' ')
  strArr = strArr.map((str, index) => {
    let firStr = str.charAt(0).toUpperCase()
    str = str.replace(/^\w/i, firStr)
    return str
  })
  console.log(strArr.join(' '))
  return strArr.join(' ')
}

capitalize('HERE IS MY HANDLE HERE IS MY SPOUT')