// 贪心算法 每次选当前最优解，直到目的达成
function mergeALL(left,right){
  return  new Set([...left, ...right])
}

function mergeHave(left,right){
  return new Set([...left].filter(x => right.has(x)))
}

function mergeNotHave(left,right){
  let currentLeft = new Set([...left].filter(x => !right.has(x)))
  let currentRight = new Set([...right].filter(x => !left.has(x)))
  return mergeALL(currentLeft,currentRight)
}

let list = new Set([1,2,3,4,5,6,7])

let library = [
  [1,2,3],
  [2,4,5],
  [3,5,6],
  [4,7,6],
  [1,5,7]
]
let allInfos = new Map()
library.forEach((value,index)=>{
  allInfos.set(index,new Set(value))
})
let result = []
function dealWith(){
  while(list.size>0){
    let coverd = new Set()
    let bestGroup = new Set()
    allInfos.forEach(value=>{
      let items = mergeHave(list,value)
      if(items.size > coverd.size){
        bestGroup = value;
        coverd = items
      }

    })
    list = mergeNotHave(list,coverd)
    result.push(bestGroup)
  }
}
let time = Date.now()
dealWith()
console.log(result)
console.log((Date.now()-time)/1000)