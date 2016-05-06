/*globals define, describe, it, expect*/

define(['NumberGetter'], function (NumberGetter) {

    'use strict';
    
    var myNumberGetter;
    
    beforeEach(function () {

        myNumberGetter = new NumberGetter();
    });

    describe('NumberGetter', function () {

        describe('getOne()', function () {

            it('should return 1 as an integer', function () {

                expect(myNumberGetter.getOne()).toBe(1);
            });
        });

        describe('getTwo()', function () {

            it('should return 2 as an integer', function () {

                expect(myNumberGetter.getTwo()).toBe(2);
            });
        });
    });
});
