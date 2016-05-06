/*globals define, describe, it, expect*/

define(['GetNumber'], function (GetNumber) {

    'use strict';

    describe("GetNumber", function () {

        it("Call module that returns 8", function () {

            expect(GetNumber.getEight()).toBe(8);
        });

        it("Calls a module that returns 7", function () {

            expect(GetNumber.getSeven()).toBe(7);
        });
    });
});
