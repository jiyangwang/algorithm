var quicksort = function(array, left, right) {
	left = left || 0;
	right = right || array.length - 1;

	var pivot = partition(array, left, right);
	if (left < pivot - 1) {
		quicksort(array, left, pivot - 1);
	}
	if (pivot < right) {
		quicksort(array, pivot, right);
	}
	return array;
}

var partition = function(array, left, right) {
	var pivot = Math.floor((left + right) / 2);
	while (left <= right) {
		while (array[left] < array[pivot]) {
			left++;
		}
		while (array[right] > array[pivot]) {
			right--;
		}
		if (left <= right) {
			swap(array, left, right);
			left++;
			right--;
		}
	}
	return left;
}

var swap = function(array, i, j) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
console.log(quicksort(array));

//time: O(n*log(n))
//space: O(log(n))
