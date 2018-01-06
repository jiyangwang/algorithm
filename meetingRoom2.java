import java.io.*;
import java.util.*;

class MyCode {
  static class Interval {
    int s;
    int e;
    public Interval(int s, int e) {
      this.s = s;
      this.e = e;
    }
  }
  public static void main (String[] args) {
    Interval i1 = new Interval(0, 30);
    Interval i2 = new Interval(5, 10);
    Interval i3 = new Interval(15, 20);
    List<Interval> intervals = new ArrayList<>();
    intervals.add(i1);
    intervals.add(i2);
    intervals.add(i3);
    System.out.println(meetingRoom(intervals));
  }
  public static int meetingRoom(List<Interval> intervals) {
    if (intervals == null || intervals.size() == 0) {
      return 0;
    }
    
    Collections.sort(intervals, new Comparator<Interval>() {
      @Override
      public int compare(Interval i1, Interval i2) {
        return i1.s - i2.s;
      }
    });
    
    PriorityQueue<Interval> pq = new PriorityQueue<>(new Comparator<Interval>() {
      @Override
      public int compare(Interval i1, Interval i2) {
        return i1.e - i2.e;
      }
    });
    int res = 1;  
    for (int i = 0; i < intervals.size(); i++) {
      if (i == 0) {
        pq.offer(intervals.get(i));
      } else {
        if (pq.peek().e > intervals.get(i).s) {
          res += 1;
        } else {
          pq.poll();
        }
        pq.offer(intervals.get(i));
        
      }
    }
    return res;
  }
  
}


/* 

Your last JavaScript (Node) code is saved below:
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
For example,Given [[0, 30],[5, 10],[15, 20]],
return 2.

 */