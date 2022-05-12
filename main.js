
rightWristX=0;
leftWristX=0;
difference=0;
function preload(){

}
function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(700,75);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model is loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        
    }
}
function draw(){
    background('#2ced0c');
    textSize(difference);
    document.getElementById("text_side").innerHTML="width and height of the text is "+difference+" px";
    fill('#2ced0c');
    stroke('#2ced0c');
    text('Kaarthik', 50, 400);
}