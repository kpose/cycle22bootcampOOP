function Car(name, model, type){
this.name = name;
this.model =model;
this.type = type;
this.wheels = 4;
this.color = "Black";

Car.prototype.sound = "Grrrrr";
 
// Use it to add a method
Car.prototype.makeSound = function() {
  return this.name + " says " + this.sound;
};

this.getVehicleInfo = function(){
	return "Your Vehicle name is" + " " + this.name + " " + "it has" + " " + this.wheels + " wheels";
};
}

function trailer(name){
	this.name = name;
	this.wheels =8;
	
	this.getTrailerInfo = function(){
	return "Your Trailer name is" + " " + this.name + " " + "it has" + " " + this.wheels + " wheels";
};
}

function porche(){
	this.name = name;
}
porche.prototype = new Car();

function truck(name){
	this.name = name;
	this.wheels =8;
	
	this.getTruckInfo = function(){
	return "Your Trailer name is" + " " + this.name + " " + "it has" + " " + this.wheels + " wheels";
};	
}

var toyota = new Car("Toyota");
var trk = new truck("Mazda");
var trail = new trailer("Trailerr");
var por = new porche("porche");

console.log(toyota.getVehicleInfo());
console.log(por.getVehicleInfo());
console.log(toyota.makeSound());
console.log(trail.getTrailerInfo());
console.log(trk.getTruckInfo());













