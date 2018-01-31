const original = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
];
  
  // correct answer 
  // coord 1: {3, 1}
  // coord 2: {4, 2}
  
  function findCoords(image){
      if (!image || image.length === 0 || !image[0] || image[0].length === 0) {
        throw new Error('error input!');
    }
    var min = [];
    var max = [];
      min = findMin(image);
    var i = min[1]; //1
    var j = min[0]; //3
    max[0] = findMaxj(image, i, j);
    max[1] = findMaxi(image, i, j);
    return [min, max];
  }
  
  function findMin(image) {
    var min = []; 
    for (var i = 0; i < image.length; i++) {
      for (var j = 0; j < image[0].length; j++) {
        if (image[i][j] === 1) {
          min = [j, i];
        }
        if (min.length !== 0) {
            return min;
        }
      }
    }
  }
  
  function findMaxi(image, i, j) {
    // find max i
    for (i; i < image.length; i++) {
        if (image[i][j] === 0) {
          return i - 1;
      }
    }
    return i;
  }
  
  function findMaxj(image, i, j) {
    // find max j
    for (j; j < image[0].length; j++) {
        if (image[i][j] === 0) {
          return j - 1;
      }
      if (j === image[0].length - 1) {
          return j;
      }
    }
  }
  
  console.log(findMin(original));
  console.log(findCoords(original));