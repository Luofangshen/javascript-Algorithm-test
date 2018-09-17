/*
猴子吃香蕉, 分割数组

（猴子吃香蕉可是掰成好几段来吃哦）

把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
 */

function chunk(arr, size) {
  // 请把你的代码写在这里
  let smallArr
  let newArr = []
  let num = Math.ceil(arr.length / size)
  for (let i = 0; i < num; i++) {
    smallArr = []
    for (let j = 0; j < size; j++) {
      if (arr[(i * size) + j] !== undefined) {
        smallArr.push(arr[(i * size) + j])
      } else {
        break
      }
    }
    newArr.push(smallArr)
  }
  return newArr;
}
console.log(chunk([1, "c", "d"], 2))

let a = [1, 2]
console.log(a[1])
