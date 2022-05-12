// 快排，中心思想 分段成两段排序 时间复杂度 O(log2 n)
const dealWith = (list) => {
  if(list.length <= 1) return list;
  let baseVal = list[0]
  let left = []
  let right = []
  for(let index=1;index<list.length;index++){
    if(list[index]<=baseVal) left.push(list[index])
    else right.push(list[index])
  }
  return dealWith(left).concat(baseVal,dealWith(right))
}
let count = 1e7
console.log(count)
let data = new Array(count).fill(0).map(x=>Math.floor(Math.random()*count))
let time = Date.now()
let item = dealWith(data)
// let item = data.sort((x,y)=>x>y ? 1:-1)
console.log((Date.now() - time)/1000)
console.log(item.join(','))