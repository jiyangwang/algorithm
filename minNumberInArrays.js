function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length; // 1 1 2 3
    var m = B.length; // 2 2 3 4 5
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    for (var k = 0; k < n; k++) {
        while (i < m && B[i] < A[k])
            i += 1;
        if (i < m && A[k] == B[i])
            return A[k];
    }
    return -1;
}