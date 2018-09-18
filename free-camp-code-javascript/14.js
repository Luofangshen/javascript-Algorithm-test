/*
摧毁数组

金克斯的迫击炮！

实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */

function destroyer(arr) {
  // 请把你的代码写在这里
  let newArr = Array.prototype.slice.call(arguments)
  newArr.forEach((item, index) => {
    if (index >= 1) {
      arr = arr.filter(it => it !== item)
    }
  })
  console.log(arr)
  return arr;
}

destroyer(["tree", "hamburger", 53], "tree", 53);