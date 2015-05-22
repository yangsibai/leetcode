##Single Number

###Question

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

###Solution

JavaScript:

    /**
     * @param {number[]} A
     * @return {number}
     */
    var singleNumber = function(A) {
        var ht = {};
        var i, length;
        for(i = 0, length = A.length; i < length; i ++) {
            ht[A[i]] = !ht[A[i]];
        }
        for(var k in ht) {
            if(ht[k]) {
                return parseInt(k, 10);
            }
        }
    };
