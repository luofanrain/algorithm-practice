// 归并排序 中心思想 拆分排序，合并排序  时间复杂度 O(nlog2 n)
const dealWith = (list) => {
  if(list.length <= 1) return list;
  let len = list.length;
  let left = dealWith(list.slice(0,len/2));
  let right = dealWith(list.slice(len/2));
  return merge(left,right)

}
const merge = (left,right) => {
  if(left.length < 1) return right; 
  if(right.length < 1) return left; 
  let temp = []
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex<left.length){
    if(left[leftIndex] < right[rightIndex] || rightIndex >=right.length){
      temp.push(left[leftIndex])
      leftIndex++
    }else{
      temp.push(right[rightIndex])
      rightIndex++
    }
  }
  while(rightIndex<right.length){
    temp.push(right[rightIndex])
    rightIndex++
  }
  return temp
}
let count = 1e8
console.log(count)
let data = new Array(count).fill(0).map(x=>Math.floor(Math.random()*count))
let time = Date.now()
console.log(data)
let item = dealWith(data)
console.log((Date.now() - time)/1000)
console.log(item)