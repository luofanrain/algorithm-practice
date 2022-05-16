// 广度优先算法  自动寻路
let list = {
  0:[0,1,2],
  1:[0,1,3],
  2:[0,2,3,4],
  3:[1,2,3,5],
  4:[2,4,5],
  5:[3,4,5]
}
//   1   3
// 0   ↗   5
//   2   4 
// 结果
// 0-1-3-5
// 0-2-4-5
// 0-2-3-5
// 0-1-3-2-4-5

let result = []
let node = {}
let entry = 2
let destination = 5;
const dealWith = (entry,path) => {
  if(entry == destination) return [[entry]]
  let items = list[entry]
  let content = []
  for(let index=0;index<items.length;index++){
    let value = items[index]
    if(path.includes(value)) continue
    let item = value == destination ? [[value]] :  dealWith(items[index],path.concat(value))
    let info = [entry]
    content = content.concat(item.filter(x=>!x.includes(entry)).map(x=>info.concat(x)))
    node[entry] = content
  }
  return content
}


let time = Date.now()
let data = dealWith(entry,[entry])
console.log(node)
console.log(data)
console.log((Date.now()-time)/1000)



