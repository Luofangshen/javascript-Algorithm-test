/*
创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.

给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 而数学术语 "对等差分" 的集合就是指
由所有只在两个集合其中之一
的元素组成的集合(A △ B = C = {1, 4}).
对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的
对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

sym([1, 2, 3], [5, 2, 1, 4]) 应该返回 [3, 4, 5].
sym([1, 2, 3], [5, 2, 1, 4]) 应该只包含三个元素.
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该返回 [1, 4, 5]
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) 应该只包含三个元素.
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该返回 [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) 应该只包含三个元素.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该返回 [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) 应该只包含五个元素.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该返回 [1, 2, 4, 5, 6, 7, 8, 9].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) 应该只包含八个元素.

 */

function sym(args) {
  function symtwo(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) {
        while (arr2.indexOf(arr1[i]) !== -1) {
          arr2.splice(arr2.indexOf(arr1[i]), 1)
        }
        arr1.splice(i, 1)
        i--
      }
    }
    let newArr = arr1.concat(arr2)
    return newArr
  }
  let arr = symtwo(arguments[0], arguments[1])
  for (let i = 2; i < arguments.length; i++) {
    arr = symtwo(arr, arguments[i])
  }
  let set = new Set(arr)
  let arrNR = []
  for (let n of set) {
    arrNR.push(n)
  }
  console.log(arrNR)
  return arrNR;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);