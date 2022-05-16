// k最近邻算法 
// 公式  √(a1-b1)²+(a2-b2)²+(a2-b2)²
// 例如 橙子的颜色大小甜度分别为  [2,1,3]  柚子为[4,3,2]
// 他们的相似度为 √(2-4)²+(1-3)²+(3-2)² = √9 = 3
// 备注 输入法打出根号的快捷方式为    摁住alt不放 小键盘输入41420 松手即可
let list = [
  {
    list:[5,1,0],
    count:300
  },
  {
    list:[3,1,1],
    count:225
  },
  {
    list:[1,1,1],
    count:75
  },
  {
    list:[4,0,1],
    count:200
  },
  {
    list:[4,0,0],
    count:150
  },
  {
    list:[2,0,0],
    count:50
  }
]

let entry = [4,1,0]
let result = 0
const dealWith = () => {
  let data = []
  let statistical = []
  for(let index=0;index<list.length;index++){
    let item = list[index].list
    let value = 0;
    entry.forEach((val,i)=>{
      value += Math.pow(val-item[i],2)
    })
    data.push(Math.sqrt(value))
  }
  while(statistical.length <4){
    console.log(statistical.length)
    let value = Math.min.apply(Math,data)
    let index = data.indexOf(value)
    statistical.push(index)
    data[index]=10000
  }
  let count = 0
  statistical.forEach(val=>{
    count += list[val].count
  })
  result = count/4
}

let time = Date.now()
dealWith()
console.log("预估值",result)
console.log((Date.now()-time)/1000)