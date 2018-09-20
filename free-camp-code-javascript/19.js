/*
将给定的数字转换成罗马数字。

所有返回的 罗马数字 都应该是大写形式。(1 - 3999) 因为4000的字符打不出来了 所以写不上去 4000的字符是 IV 上面一横

基本字符	
I V X L C D M
相应的阿拉伯数字表示为	
1 5 10 50 100 500 1000
*/

function convert(num) {
  let geArr = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  let shiArr = ['X', 'XX', 'XXX', 'XL','L', 'LX', 'LXX', 'LXXX', 'XC']
  let baiArr = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  let qianArr = ['M', 'MM', 'MMM']
  let ge = num % 10
  let shi = Math.floor(num / 10) % 10
  let bai = Math.floor(num / 100) % 10
  let qian = Math.floor(num / 1000)
  let str
  if (qian > 0) {
    str = qianArr[qian - 1] + (bai === 0 ? '' : baiArr[bai - 1]) + (shi === 0 ? '' : shiArr[shi - 1]) + (ge === 0 ? '' : geArr[ge - 1])
  } else if (bai > 0) {
    str = baiArr[bai - 1] +  (shi === 0 ? '' : shiArr[shi - 1]) + (ge === 0 ? '' : geArr[ge - 1])
  } else if (shi > 0) {
    str = shiArr[shi - 1] + (ge === 0 ? '' : geArr[ge - 1])
  } else if (ge > 0) {
    str = geArr[ge - 1]
  } else {
    alert('数字不合法')
  }
  console.log(str)
  return str;
}

convert(140);
