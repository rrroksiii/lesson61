"use strict"

//квадрат
function Square(a){
   this._a = a;
}
Square.prototype.getA = function(){
   return this._a;
}
Square.prototype.setA = function(a){
   this._a = a;
}
Square.prototype.perimeter = function(){
   return this._a * 4;
}

//куб (с переопределением метода)
function Cube1(a){
   Square.call(this, a);
}
Cube1.prototype = Object.create(Square.prototype); 
Cube1.prototype.constructor = Cube1;
Cube1.prototype.perimeter = function(){
   return this._a * 12;
}

//куб (с расширением метода)
function Cube2(a){
   Square.call(this, a);
}
Cube2.prototype = Object.create(Square.prototype); 
Cube2.prototype.constructor = Cube2;
Cube2.prototype.perimeter = function(){
   var p = Square.prototype.perimeter.call(this);
   return p*=3;
}

//вызов
var square = new Square(5);
console.log(square.perimeter());
var cube1 = new Cube1(5);
console.log(cube1.perimeter());
var cube2 = new Cube2(5);
console.log(cube2.perimeter());

