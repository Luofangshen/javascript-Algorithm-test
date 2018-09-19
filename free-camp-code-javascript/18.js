/*
比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
 */
function diff(arr1, arr2) {
  let Arr = [];
  // Same, same; but different.
  Arr = arr1.concat(arr2)
  Arr = Arr.filter((item, index) => {
    return Arr.indexOf(item) + Arr.indexOf(item, index + 1) === index - 1
  })
  console.log(Arr)
  return Arr;
}

diff([], ["snuffleupagus", "cookie monster", "elmo"]);