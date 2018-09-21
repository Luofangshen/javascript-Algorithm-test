/*
把指定的字符串翻译成 pig latin。

Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。

如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
 */

function translate(str) {
  let newStr = ''
  for (let n of str) {
    if (/a|e|i|o|u/ig.test(n)) {
      break
    }
    newStr += n
  }
  if (newStr) {
    str = str.replace(newStr, '') + newStr + 'ay'
  } else {
    str += 'way'
  }
  console.log(str)
  return str;
}

translate("glove");