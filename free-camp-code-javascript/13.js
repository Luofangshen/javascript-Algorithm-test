/*
过滤数组假值

（真假美猴王）

删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
 */

function bouncer(arr) {
  // 请把你的代码写在这里
  arr = arr.filter((item,index) => item)
  console.log(arr)
  return arr;
}

bouncer([7, "ate", "", false, 9]);
