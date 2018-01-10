function throttle(wait, onLast, onFirst, interval, timestamps) {
  var cls = [], res = [], i = 0;
  while (i < timestamps.length) {
    var cl = [], l = timestamps[i], r = timestamps[i] + wait;
    while (timestamps[i] >= l && timestamps[i] <= r) {
      cl.push(timestamps[i]);
      l = timestamps[i++];
      r = l + wait;
    }
    cl.push(r);
    cls.push(cl);
  }

  for (i = 0; i < cls.length; i++) {
    for (var j = 0; j < cls[i].length; j++) {
      if ((j === 0 && onFirst) || (j === cls[i].length - 1 && onLast))
        res.push(cls[i][j]);
      if (interval > 0 && j + 1 < cls[i].length && cls[i][j] + interval === cls[i][j + 1])
        res.push(interval);
    }
  }
  return res;
}

var a = throttle(20, false, true, 0, [0,10,20,30]);   //[0]
var b = throttle(20, true, false, 0, [0,10,20,30]);   //[50]
var c = throttle(20, false, true, 20, [0,10,20,30]);  //[0,20]
var d = throttle(20, false, true, 20, [0,10,40]);     //[0,40]
var e = throttle(20, true, true, 0, [0,10,50]);       //[0,30,50,70]
var f = throttle(20, true, true, 10, [0,10,50]);      //[0,10,20,30,50,60,70]

console.log(a,b,c,d,e,f);