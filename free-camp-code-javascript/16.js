/*
凯撒密码

（让上帝的归上帝，凯撒的归凯撒）

下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。

移位密码也就是密码中的字母会按照指定的数量来做移位。

一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。

写一个ROT13函数，实现输入加密字符串，输出解密字符串。

所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。
 */

function rot13(str) { // LBH QVQ VG!
  // 请把你的代码写在这里
  let reg = /[A-Z]/
  let strArr = str.split('')
  strArr = strArr.map((str, index) => {
    if (reg.test(str)) {
      let num 
      if (str.charCodeAt() - 13 < 65) {
        num =91 - (65 - str.charCodeAt() + 13)
      } else if (str.charCodeAt() - 13 > 90) {
        num = str.charCodeAt() - 39
      } else {
        num = str.charCodeAt() - 13
      }
      str = String.fromCharCode(num)
      
    }
    return str
  })
  console.log(strArr.join(''))
  return strArr.join('')
}

rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");  // 你可以修改这一行来测试你的代码