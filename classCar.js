//class is a template not a object for js object
class carInfo{
    constructor(name, model, year){
  this.name=name;
  this.model=model;
  this.year=year
    }

    display(){
        console.log(`Details about the car ${this.name}, ${this.model} and
            ${this.year}`);  
    }  
}
//creat an object of class carInfo
let c1=new carInfo("maruti","swift",2020);
    c1.display();
    let c2=new carInfo("Honda", "Amaze", 2024);
    c2.display();
