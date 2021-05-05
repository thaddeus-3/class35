var ball;
var dataBase;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    dataBase = firebase.database()
    var dref = dataBase.ref('ballPosition')
    dref.on("value",readData)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    dataBase.ref("ballPosition").set({
        x: ball.x + x,
        y: ball.y + y
    })

}

function readData(data) {
    var position = data.val()
    ball.x = position.x
    ball.y = position.y
} 