/*globals define, describe, it, expect*/

define(function () {

    'use strict';

    describe('Simple', function () {
        
        it('should assert true to be true', function () {
            
            expect(true).toBe(true);
        });

        it('should assert seven to be seven', function () {
            
            expect(7).toBe(7);
        });
    });
});
