import {  Iperson } from "./demo.js";
interface Iemp extends Iperson{
    salary:number
}
class Employeee implements Iemp{
    name: string;
    salry:number;
    id:number;
   constructor(_name:string,_salary:number,_id:number){
    this.name=_name;
    this.salry=_salary;
    this.id=_id
   }
    salary: number;
   printData(): void {
       console.log("my name is"+this.name+"and salary is"+this.salry+"and id is"+this.id);
       
   }
}
var emp1 =new Employeee("ahmed",200,3)

emp1.printData()
