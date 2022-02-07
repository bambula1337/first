"use strict";

class Smclass {
  constructor(prop1, prop2){
    this.prop1 = prop1;
    this.prop2 = prop2;
  }

  smMth(){
    return this.prop1 * this.prop2;
  }
}


class Scndclass extends Smclass {
  constructor(prop1, prop2, text, color){
    super(prop1, prop2);
    this.text = text;
    this.color = color;
  }

  ///smMth наследовался от Smclass

  showMyPros(){
    console.log(`text - ${this.text}, color - ${this.color}`);
  }
}

const x = new Smclass(10,10);
const y = new Scndclass(20,20,"text", "red");

y.showMyPros();
console.log(y.smMth());
console.log(x.smMth());

console.log(x);