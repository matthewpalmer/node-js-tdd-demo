module.exports = function sort(inputArray) {
    for (var e=0;e<inputArray.length;e++) {
        var nextElem = inputArray[e+1];
        if (inputArray[e]>inputArray[e+1]) {
            inputArray[e+1]=inputArray[e];
            inputArray[e]=nextElem;
            //console.log(inputArray);
            sort(inputArray);
        } else {
        	
        }
    }
    return inputArray;
}