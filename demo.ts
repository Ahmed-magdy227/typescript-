 // type
// var num:number;
// num=100;
// console.log(num);
// var str1:string;
// str1="ahmed"
// console.log(str1)
// var bol1:boolean
// var bol1=true
// console.log(bol1)
// // generic
// var arr:Array<number>=[1,2,77];
// console.log(arr)
// var arr1:Array<string>=["ahmed","magdy"]
// console.log(arr1)
// /*************generic */
// function funName<T>(items:T[]):T[]{
// return new Array<T>().concat(items)
// }
// var newArray =funName <number>([1,2,3,3])
// console.log(newArray);
// var newArray1 =funName <string>(["ahmed","magdy"])
// console.log(newArray);

// union
// var x:(string|number)
// x="ahmed"
// console.log(x);
// x=333
// console.log(x);
// var y:string|number|boolean
// y="ahmed"
// console.log(y);
// y=333
// console.log(y);
// y=false
// console.log(y);
// var aa:(string|number)[]
// aa=["ahmed"]
// console.log(aa);
// aa=[333]
// console.log(aa);
// // 
// enum mang{
//     MANGER="manger",
//     assis="assis"
// }
// console.log(mang.MANGER);
// Function with typed arguments and return type. 


//  function fun1(x:(string|number)){
//     if(typeof(x)==="number")
//        {
//         console.log("x is stting")
//        }
//     else if(typeof(x)==="number"){
//         console.log("x is number")
//     }
// }
// fun1("ahmed")
// function sumFun(num1:number,num2:number):number{
//     return num1+num2

//  } console.log(sumFun(5,100));
    /**intrerface inherit class */
   
    export  interface Iperson{
        name:string;
        printData():void
        
    }
   

// task2,3
class point2D {
    x: number
    y: number
    constructor(_x: number, _y: number) {
        this.x = _x;
        this.y = _y
    }
    calcLength(): void {
        console.log(`lenth = ${0.5 * (Math.pow(this.x, 2) * Math.pow(this.y, 2))}`);

    }
}

class point3D extends point2D {
    z: number
    constructor(_x: number, _y: number, _z: number) {
        super(_x, _y)
        this.z = _z
    }
    calcLength(): void {
        console.log(`lenth = ${0.5 * (Math.pow(this.x, 2) * Math.pow(this.y, 2) * Math.pow(this.z, 2))}`);
    }
}

var point1 = new point2D(5, 7)
point1.calcLength()

var point2 = new point3D(5, 7, 2)
point2.calcLength()


// task4

interface IKey<T, V> {
    process(key: T, val: V): void;
};

class kvProcessor implements IKey<number, string>
{
    process(key: number, val: string): void {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc = new kvProcessor();
proc.process(10, 'value Of v');










