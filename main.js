canvas=document.getElementById("boogle5");
booglectx5 = canvas.getContext("2d");
rwidth1=150;
rheight1=100;
rx1 =0;
ry1 = 0;
ry2 = 125;
rx2 = 0;
roverpic1 = "car1.png";
roverpic2 = "car2.png";
backpic = "background.jpg";
function add(){
    backpicTag = new Image();
    backpicTag.onload = uploadbackpic;
    backpicTag.src = backpic;
    roverpic1Tag = new Image();
    roverpic1Tag.onload = uploadrover1;
    roverpic1Tag.src = roverpic1;
    roverpic2Tag = new Image();
    roverpic2Tag.onload = uploadrover2;
    roverpic2Tag.src = roverpic2;
}

function uploadbackpic(){
    booglectx5.drawImage(backpicTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover1(){
    booglectx5.drawImage(roverpic1Tag, rx1, ry1, rwidth1, rheight1);
}
function uploadrover2(){
    booglectx5.drawImage(roverpic2Tag, rx2, ry2, rwidth1, rheight1);
}
window.addEventListener("keydown", my_key_down);
function my_key_down(e){
keypressed = e.keyCode;
console.log(keypressed)
if(keypressed == "38"){
    car1up();
    console.log("Car 1 up");
}
else if(keypressed == "40"){
    car1down();
    console.log("Car 1 down");
}
else if(keypressed == "39"){
    car1right();
    console.log("Car 1 right");
}
else if(keypressed == "37"){
    car1left();
    console.log("Car 1 left");
}
else if(keypressed == "87"){
    car2left();
    console.log("Car 2 left");
}
}