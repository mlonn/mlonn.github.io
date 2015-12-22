Collision = function (ball1,ball2) {
    this.b1 = ball1;
    this.b2 = ball2;

    this.solve = function () {
        var deltaX = this.b1.x - this.b2.x;
        var deltaY = this.b1.y - this.b2.y;
        var distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

        //Hitta enhetsvektorer för de nya axlarna A & B i det koordinatsystem som är relativt till kollisionen.  
        var unitVectorA = new Vector(deltaX, deltaY).scale(1 / distance);
        var unitVectorB = new Vector(-1 * unitVectorA.y, unitVectorA.x);

        
        //Hitta längden (= farten) på hastigheten i A och B-axlarna genom skalärprodukt mellan enhetsvektorerna (i A och B) och b1s hastighet.
        var u1aLength = unitVectorA.dotProd(this.b1.v);
        var u1bLength = unitVectorB.dotProd(this.b1.v);

        //Hitta längden (= farten) på hastigheten i A och B-axlarna genom skalärprodukt mellan enhetsvektorerna (i A och B) och b2s hastighet.
        var u2aLength = unitVectorA.dotProd(this.b2.v);
        var u2bLength = unitVectorB.dotProd(this.b2.v);

        //Kollisionen påverkar bara hastigheten i A-axeln.
        // Använder farten i A-axeln för att räkna ut den nya farten efter kollisionen enligt ekvationerna från lektionen.
        var massCombined = this.b1.m + this.b2.m;
        var I = this.b1.m * u1aLength + this.b2.m * u2aLength;
        var R = -1 * u2aLength + u1aLength;
        var v1aLength = (I - this.b2.m * R) / (massCombined);
        var v2aLength = (I + this.b1.m * R) / (massCombined);

        //Kollisionen påverkar inte hastigheterna i B-axeln.
        var v1bLength = u1bLength;
        var v2bLength = u2bLength;

        //Vektorer för hastigheterna efter kollisionen i A och B-axlarna.
        //v1
        var v1a = unitVectorA.scale(v1aLength);
        var v1b = unitVectorB.scale(v1bLength);
        //v2
        var v2a = unitVectorA.scale(v2aLength);
        var v2b = unitVectorB.scale(v2bLength);

        //Slå ihop hastigheten i A och B-axlarna för att få hastigheten v1 och v2.
        var v1 = v1a.addVector(v1b);
        var v2 = v2a.addVector(v2b);

        //Updatera b1 och b2s hastigheter till de nya hastigheterna.
        this.b1.v = v1;
        this.b2.v = v2;
    }
}