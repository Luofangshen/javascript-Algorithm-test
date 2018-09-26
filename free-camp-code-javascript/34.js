/*
对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
steamroller([[["a"]], [["b"]]]) 应该返回 ["a", "b"]。
steamroller([1, [2], [3, [[4]]]]) 应该返回 [1, 2, 3, 4]。
steamroller([1, [], [3, [[4]]]]) 应该返回 [1, 3, 4]。
steamroller([1, {}, [3, [[4]]]]) 应该返回 [1, {}, 3, 4]。

使用了递归 以及 默认值  这个解法有点巧妙  偶然间想到的  其实对于这些可以使用封装好的工具包lodash 十分强大
 */


function steamroller (arr, newArr = []) {
  // I'm a steamroller, baby
  function getStyle (data) {
    let str = Object.prototype.toString.call(data)
    return str.slice(8, -1)
  }
  arr.forEach(item => {
    if (getStyle(item) === 'Array') {
      steamroller(item, newArr)
    } else {
      newArr.push(item)
    }
  })
  return newArr
}
console.log(steamroller([1, [], [3, [[4]]]]))


