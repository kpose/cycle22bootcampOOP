'use strict'

var file = {}
file.findMinMax = function(numArray) {
   var minMax = [];

	var arrayLength = numArray.length;
	var max = 0;
	var min = numArray[0];
	for (var i = 0; i < arrayLength; i++) {
	    if (numArray[i] < min) {
	      min = numArray[i];
	    }
	    else if (numArray[i] > max) {
	      max = numArray[i];
	    }
	}
	if (max === min) {
	  minMax.push(min);
	}
	else {
	  minMax.push(min);
	  minMax.push(max);
	}
   	return minMax;
 }
 
module.exports = file;