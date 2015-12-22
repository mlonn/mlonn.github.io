ant = function (x, y, c, f) {
    this.x = x; //x-position
    this.y = y;//y-position
    this.c = c; //color
    if (f < 0 || f > 3) {
        f = 0;
    } else {
        this.f = f; //0 = N, 1 = E, 2 = S, 3 = W;
    }
	
    this.turnRight = function () {
        this.f -= 1;
        if (this.f == -1) {
            this.f = 3;
        }
    }

    this.turnLeft = function() {
        this.f += 1;
        if (this.f == 4) {
            this.f = 0;
        }
    }

    this.step = function () {
        switch (this.f) {
            case 0: this.y -= 1; break;
            case 1: this.x += 1; break;
            case 2: this.y += 1; break;
            case 3: this.x -= 1; break;
        }
    }
}