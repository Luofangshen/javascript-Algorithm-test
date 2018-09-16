/*
找出多个数组中的最大数

右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。

[[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
 */
function maxNum(arr) {
  arr = arr.map((item, index) => {
    return Math.max.apply(null, item)
  })
  console.log(arr)
  return arr
}
maxNum([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])




/*
理解基本数据包装构造函数String Number Bollean 很重要
因为 这三个是基本数据  没有属性和方法的
但是 String 的方法 就是在包装构造函数的原型上的
当基本数据要使用这些方法 ， 会先通过构造函数 转换成 实例对象 来调用
 */
let str = 10
console.log(str.toString(2))



/*
扩展算法  找出所有最大的 借用了递归的算法  跟深度拷贝一个原理 递归算法还是比较复杂的
 */
function findMax(arr) {
  arr.forEach((item, index) => {
    if (getStyle(item) === 'Array') {
      arr[index] = findMax(item)
    }
  })
  return Math.max.apply(null, arr)
}

function getStyle(data) {
  let str = Object.prototype.toString.call(data)
  return str.slice(8, -1)
}

console.log(findMax([[4, 5, 1,[1, 5, 8, 1002], 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))