//commonjs 写法 导入
const{add,divide,subtract,multiplication}=require('./js/helper')

//es6 导入 一种
// import {add,divide,subtract,multiplication} from './helper'

//es6 default 导出 导入名字就可以随意起 且不需要夸号其余都必须要夸号
// import newAdd from './helper'

//es6 导出一个类
// import {Person} from './helper'

// const person=new Person()
// person.run();

//es6导出所有
// import * as all from './helper'

// console.log(all.add(2,2))
// console.log(all.subtract(2,2))
// console.log(newAdd(1,2))

console.log(add(2,2))

console.log(divide(2,2))

console.log(subtract(2,2))

console.log(multiplication(2,2))

require('./css/normal.css')

