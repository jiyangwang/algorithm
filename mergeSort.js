var mergeSort = function(array) {
    if (!array || array.length < 2) {
        return array;
    }
    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

var merge = function(left, right) {
    var arr = [];
    while (left.length && right.length) {
        if (left[0] <= right[0])
            arr.push(left.shift());
        else
            arr.push(right.shift());
    }
    return arr.concat(left.slice()).concat(right.slice());
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(mergeSort(array));

//time: O(n*log(n)): O(n) + O(n*log(n))
//space: O(n)
