// 实现一个twoSum 函数: 传入源数组和目标数字，返回源数组中两个相加起来等于目标
// 数字的索引
// twoSum( [2,7,11,15], 9)  ，因为2 + 7 = 9
function twoSum(arr, sum) {
  let cache = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (cache.has(sum - arr[i])) {
      return [arr[i], sum - arr[i]];
    } else {
      cache.set(arr[i], sum - arr[i]);
    }
  }
  return [0, 0];
}

// 实现一个sum 函数，使其同时满足以下两个调用需求
// sum(2,3)  //5
// sum(2)(3) //5
function sum(a, b) {
  return b ? a + b : function(b){
    return a + b
  }
}

