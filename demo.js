"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// task2,3
var point2D = /** @class */ (function () {
    function point2D(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
    point2D.prototype.calcLength = function () {
        console.log("lenth = ".concat(0.5 * (Math.pow(this.x, 2) * Math.pow(this.y, 2))));
    };
    return point2D;
}());
var point3D = /** @class */ (function (_super) {
    __extends(point3D, _super);
    function point3D(_x, _y, _z) {
        var _this = _super.call(this, _x, _y) || this;
        _this.z = _z;
        return _this;
    }
    point3D.prototype.calcLength = function () {
        console.log("lenth = ".concat(0.5 * (Math.pow(this.x, 2) * Math.pow(this.y, 2) * Math.pow(this.z, 2))));
    };
    return point3D;
}(point2D));
var point1 = new point2D(5, 7);
point1.calcLength();
var point2 = new point3D(5, 7, 2);
point2.calcLength();
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(10, 'value Of v');
