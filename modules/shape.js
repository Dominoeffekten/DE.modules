'use strict';
/**
 * Shape object, parent
 */
const Shape = {
    initinit(cv, x, y, color) {
        this.cv = cv;
        this.ctx = cv.getContext("2d");
        this.x = x;
        this.y = y;
        this.color = color;
    },

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.closePath();

        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();        
    },

    move() {
        this.x += 0;
        this.y += 0;
    }
};

const Rect = {
    init(cv, x, y, width, height, color) {
        this.width = width;
        this.height = height;
        this.initinit(cv, x, y, color);
    }
};
Object.setPrototypeOf( Rect, Shape );

const Circle = {
    init(cv, x, y, r, startangle, endangle, color, dir, dx = 3, dy = 0) {
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.dx = dx;
        this.dy = dy;
        this.initinit(cv, x, y, color);
    },

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();

        this.ctx.lineWidth = 1;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        //this.ctx.stroke();
    },     

    move() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x < 20){
            console.log('Øverste venstre hjørne');//Øverste venstre hjørne
            this.x = 20;
            this.dx = 0;
            this.dy = 3;
        } else if(this.x > this.cv.getWidth() - 20){ //nederste højre hjørne
            console.log('nederste højre hjørne');
            this.x = this.cv.getWidth()-20;
            this.dy = -3;
            this.dx = 0;
        } else if(this.y < 20){ //højre øverste hjørne
            console.log('Højre øverste hjørne');
            this.dy = 0;
            this.dx = -3; 
        } else if(this.y > this.cv.getHeight() - 20){ // nederste venstre hjørne
            console.log('Nederst venstre hjørne');
            this.dy = 0;
            this.dx = 3; 
            
        }
        
    }
};
Object.setPrototypeOf( Circle, Shape );

const Ellipse = {
    init(cv, x, y, r, startangle, endangle, color, dir, scx, scy, rot) {
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.scalex = scx;
        this.scaley = scy;
        this.rotate = rot;
        this.initinit(cv, x, y, color);
    },

    draw() {
        this.ctx.save();
        this.ctx.scale(this.scalex, this.scaley);
        this.ctx.beginPath();
        this.ctx.moveTo(this.x, this.y);
        this.ctx.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.ctx.closePath();
        this.ctx.restore();
        
        this.ctx.rotate(this.rotate);
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }
};
Object.setPrototypeOf( Ellipse, Shape );

export {Rect, Circle, Ellipse};