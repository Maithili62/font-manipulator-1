function setup()
{
   video =  createCapture(VIDEO);
    video.size(550 , 550);
    video.position(300 , 225);
    canvas = createCanvas(550 , 500);
    canvas.position(860 , 250);
    posenet = ml5.poseNet(video , modalLoaded);
    posenet.on('pose' , gotPoses);
}

rightWristX = 0;
leftWristX = 0;
difference = 0;

function modalLoaded()
{
    console.log("PoseNet is Initialized");
}

function draw()
{
    background('black');
    textSize(difference);
    text('Maithili' , 10 , 250);
    fill("purple");
    stroke("white");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "Difference = " + difference);

        document.getElementById("square_size").innerHTML = "The size of the text is = " + difference + "px";
    }
}