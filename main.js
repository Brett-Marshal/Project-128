Harry_Potter="";
Peter_Pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("The X value of Left Wrist is " + leftWristX + " ||" + "The Y value of Left Wrist is " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("The X value of Right Wrist is " + rightWristX + " ||" + "The Y value of Right Wrist is " + rightWristY)
    }
}

function modelLoaded()
{
    console.log("The Model is Initialized");;
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function preload()
{
    Harry_Potter = loadSound("Harry_Potter.mp3");
    Peter_Pan = loadSound("Peter_Pan.mp3");
}