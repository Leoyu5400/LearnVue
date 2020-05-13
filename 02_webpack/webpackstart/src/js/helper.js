function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

function multiplication(a,b){
    return a*b;
}

//commonJS 写法使用module.exports
// module.exports={
//     add,
//     subtract,
//     divide,
//     multiplication
// }


//es6模块写法 一种
export {
    add,
    subtract,
    divide,
    multiplication
}


//es6模块写法 二种
// export default  function adds(a,b){
//     return a+b
// }


//导出类
// export class Person{
//     run(){
//        console.log('人类会跑步！')
//    }
// }

