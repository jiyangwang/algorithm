/*
Given an array of meeting time intervals consisting of 
start and end times [[s1,e1],[s2,e2],...] (si < ei), 
determine if a person could attend all meetings.
For example,Given [[0, 30],[5, 10],[15, 20]],
return false.
*/

function determine(arr) {
  if (!arr || arr.length === 0)
    throw err;
  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1 && arr[i][1] > arr[i + 1][0])
      return false;
  }
  return true;
}

var arr = [[0, 3],[5, 10],[15,20]];
console.log(determine(arr))