/**
 * @param {number[]} A
 * @return {number}
 */
var singleNumber = function(A) {
    if(A.length === 0) return null;
    if(A.length === 1) return A[0];
    var ht = {};
    for(var i = 0; i < A.length; i ++) {
        if(ht[A[i]]) {
            delete ht[A[i]];
        }
        else{
            ht[A[i]] = 1;
        }
    }
    for(var k in ht) {
        if(ht.hasOwnProperty(k)){
            return parseInt(k);
        }
    }
};
