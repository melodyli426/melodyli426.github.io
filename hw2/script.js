// Melody 

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = -30, y = 30, dx = 10, dy = 10, r = 30, color = "#0095DD";
let canMove = 0;
var randomColor = color;
 


// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = randomColor;
	ctx.fill();
	ctx.closePath();
}

// 按下按鍵時觸發
document.addEventListener("keydown", keyDownHandler);
function keyDownHandler(e) 
{
	if(e.key == "ArrowRight")        x += dx;
	else if(e.key == "ArrowLeft")    x -= dx;
    else if(e.key == "ArrowUp")      y -= dy;
	else if(e.key == "ArrowDown")    y += dy;
}

// TODO: 滑鼠移動(mousemove)時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
document.addEventListener("mousemove", Mousemove);
function Mousemove(e)
{
   if(canMove)
   {
	   x = e.clientX - canvas.offsetLeft;
       y = e.clientY - canvas.offsetTop;
   }
}

document.addEventListener("mousedown" , Mousedown);
document.addEventListener("mouseup" , Mouseup);
function Mousedown()
{
canMove = 1;
randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}
function Mouseup()
{
 canMove = 0;
 x = -30;
 y = 30;

}


// 更新畫布
function draw() 
{	
	
    drawBall();
    requestAnimationFrame(draw);
}
draw();