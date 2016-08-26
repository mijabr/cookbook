interface Array<T> {
   remove(o: T): Array<T>;
}

Array.prototype.remove = function (value) {
    var idx = this.indexOf(value);
    if (idx != -1) {
        this.splice(idx, 1);
    }
    return this;
}
