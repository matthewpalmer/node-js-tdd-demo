/*
var array = [3,9,4,2,8,3,7,5,4,5,3,8,8,11,4,9,5,2,1];
var sorter = function(inputArray) {
    for (e=0;e<inputArray.length;e++) {
        var nextElem = inputArray[e+1];
        if (inputArray[e]>inputArray[e+1]) {
            inputArray[e+1]=inputArray[e];
            inputArray[e]=nextElem;
            //console.log(inputArray);
            sorter(inputArray);
        }
    }
}
sorter(array);
*/
module.exports =function (a,b) { return a + b;}

