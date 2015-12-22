Vector = function (x, y) {
    this.x = x;
    this.y = y;

    this.length = function () {
        return Math.sqrt(x * x + y * y);
    }

    this.dotProd = function (v) {
        return (this.x * v.x) + (this.y * v.y);
    }

    this.scale = function (scale) {
        return new Vector(this.x * scale, this.y *scale);
    }

    this.addVector = function (vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    this.toString = function () {
        return "x: " + x + ", y: " + y;
    }
}