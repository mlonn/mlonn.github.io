Ball = function (x, y, r, v, c) {
    this.x = x; //x-position
    this.y = y;//y-position
    this.r = r;//radius
    this.v = v; //velocity
    this.m = r; //mass (=radius)
    this.c = c; //color

    this.isColliding = function (b2) {
        if (this == b2) {
            return false;
        } else {
            var deltaX = b2.x - this.x;
            var deltaY = b2.y - this.y;
            var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            return distance < (this.r + b2.r);
        }
    }

}