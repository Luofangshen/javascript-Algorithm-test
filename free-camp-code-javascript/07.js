/*
检查字符串结尾

判断一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。
 */

function match(str, target) {
  let exp = new RegExp(target+'$', 'g')
  console.log(exp.test(str))
  return exp.test(str)
}

match("He has to give me a new name", "na")