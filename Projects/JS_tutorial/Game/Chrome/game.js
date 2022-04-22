var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'white';
        ctx.drawImage(img1, this.x, this.y, this.width, this.height)
    }
}

var img1 = new Image();
img1.src = "icon_1.png";

var img2 = new Image();
img2.src = "icon_2.png";

class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.drawImage(img2, this.x, this.y, this.width, this.height)
    }
}

var timer = 0;
var cactusexe = [];
var jumptimer = 0;
var animation;

function frameexe(){
    animation = requestAnimationFrame(frameexe);
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height);

    if (timer % 240 === 0){
    var cactus = new Cactus();
    cactusexe.push(cactus);
    }

    cactusexe.forEach((a, i, o) => {
        if (a.x < 0){
            o.splice(i, 1);
        }
        a.x--;

        crash(dino, a);

        a.draw();
    })
    
    

    if (jump == true){
        dino.y--;
        jumptimer++;
    }

    if (jump == false){
        if (dino.y < 200){
            dino.y++;
        }
    }

    if (jumptimer > 100){
        jump = false;
        jumptimer = 0;
    }

    dino.draw();
}

frameexe();

function crash(dino, cactus){
    var xaxis = cactus.x - (dino.x + dino.width);
    var yaxis = cactus.y - (dino.y + dino.width);
    if (xaxis < 0 && yaxis < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

var jump = false;
document.addEventListener('keydown', function(e){
    if (e.code === 'Space'){
        jump = true;
    }
})