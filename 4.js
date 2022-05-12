// 贪心算法
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

let list = new Set([2,5,7])

let library = [
  [1,2,3],
  [2,4,5],
  [3,5,6],
  [4,7,6],
  [1,5,7]
]
let result = []
function dealWith(){
  for(let index=0;index<library.length;index++){
    let value = library[index]
    let items = mergeALL(list,value)
    if(items.length )
  }

}
let time = Date.now()
dealWith()
console.log(result)
console.log((Date.now()-time)/1000)