import java.io.*;
import java.util.*;

class MyCode {
  public static void main (String[] args) {
    String s = "ADOBECODEBANC";
    String t = "ABC";
    System.out.println(minWindow(s, t));
  }
  
  public static String minWindow(String s, String t) {
    if (s == null || t == null || s.length() < t.length()) {
        return "";
    }
    int[] dic = new int[128];
    for (char c : t.toCharArray()) {
        dic[c - 'A']++;
    }
    int i = 0;
    int j = 0;
    int min = s.length();
    int count = t.length();
    int start = 0;
    int end = 0;
    while (j < s.length()) {
      if (dic[s.charAt(j++) - 'A']-- > 0) {
          count--;
      }
      while (count == 0) {
        int len = j - i + 1;
        if (len < min) {
            min = len;
            start = i;
            end = j;
        }
        if (dic[s.charAt(i++) - 'A']++ >= 0) {
            count++;
        }
      }
    }
    return s.substring(start, end);
  }
}

/*

S = "ADOBECODEBANC" T = "ABC"
Minimum window is "BANC"

*/