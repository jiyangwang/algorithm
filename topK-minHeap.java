import java.io.*;
import java.util.*;

class MyCode {
  public static void main (String[] args) {
    String[] arr = new String[] {"a", "a", "b", "b", "b", "b", "c", "c", "a", "a"};
    String[] res = topK(arr, 2);
    for (int i = 0; i < res.length; i++) {
      System.out.println(res[i]);
    }
  }
  
  public static String[] topK(String[] arr, int k) {
    if (arr == null || arr.length == 0) {
      return arr;
    }
    HashMap<String, Integer> map = new HashMap<>();
    for (int i = 0; i < arr.length; i++) {
      int val = map.getOrDefault(arr[i], 1);
      map.put(arr[i], val + 1);
    }
//     for (String key: map.keySet()) {
//       System.out.println(key + ':' + map.get(key));
//     }
    PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(new Comparator<Map.Entry<String, Integer>>() {
      @Override
      public int compare(Map.Entry<String, Integer> m1, Map.Entry<String, Integer> m2) {
        return m1.getValue() - m2.getValue();
      }
    });
    int count = 0;
      
    for (Map.Entry<String, Integer> entry: map.entrySet()) {
      if (count >= k) {
        if (entry.getValue() > pq.peek().getValue()) {
          pq.poll();
          pq.offer(entry);
        }    
      } else {
        pq.offer(entry);
      }
      count++;
    }
    
    String[] res = new String[k];
    for (int i = 0; i < k; i++) {
      res[i] = pq.poll().getKey();
    }
    return res;
  }
}
 

/* 
Your last JavaScript (Node) code is saved below:
/*

Composition = ["a", "a", "b", "b", "b", "b", "c", "c", "c", "d"], 
top 2 frequent words are [“b”, “c”]
Composition = ["a", "a", "b", "b", "b", "b", "c", "c", "c", "d"], 
top 4 frequent words are [“b”, “c”, "a", "d"]
Composition = ["a", "a", "b", "b", "b", "b", "c", "c", "c", "d"], 
top 5 frequent words are [“b”, “c”, "a", "d"]

*/