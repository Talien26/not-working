function preload() {   
    nose = loadImage('https://i.postimg.cc/zfSXzc65/https://i.postimg.cc/L8z0ytkz/image.png.png')
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Intialized')
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 30, 30)
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 30, 30)
}

function take_snapshot(){
    save('Child Image.png')
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}