onmessage = function (evt) {
    var work = evt.data;
    var i = 0;
    var a = new Array(work);
    var sum = 0;
    for (i = 0; i < work; i++) {
        a[i] = i * i;
        sum += i * i;
    }
    this.self.postMessage(sum);
}