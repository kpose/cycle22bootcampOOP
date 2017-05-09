(function() {
  'use strict';

  var chai = require('jasmine');
  // var assert = chai.assert;
  // var expect = chai.expect;
  // var should = chai.should();
  var myApp = require('../app/library.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [10,40] for [10, 20, 30 , 40]', function () {
        expect(myApp.findMinMax([10, 20, 30, 40])).toEqual([10, 40]);
      });

      it('should return [101,400] for [101, 200, 340 , 400]', function () {
        expect(myApp.findMinMax([101, 200, 340 , 400])).toEqual([101, 400]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [410] for [410, 410, 410, 410]', function () {
        expect(myApp.findMinMax([410, 410, 410, 410])).toEqual([410]);
      });

      it('should return [24] for [24, 24, 24, 24]', function () {
        expect(myApp.findMinMax([24, 24, 24, 24])).toEqual([24]);
      });

      it('should return [50] for [50, 50, 50, 50]', function () {
        expect(myApp.findMinMax([50, 50, 50, 50])).toEqual([50]);
      });

      it('should return [1] for [1, 1, 1, 1]', function () {
        expect(myApp.findMinMax([1, 1, 1, 1])).toEqual([1]);
      });

    });

  });

})();