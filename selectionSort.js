var selectionSort = function(array) {
    //outerloop
    for (var i = 0; i < array.length; i++) {
        var min = i; //min = min_index
        //innerloop
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(array, i, min);
        }
    }
    return array;
}

var swap = function(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(selectionSort(array));

//time: O(n^2)
//space: O(1)
