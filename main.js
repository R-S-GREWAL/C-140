function setup() {
    var canvas = createCanvas(600,600);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(900,325);
	
    poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
  }
function modelLoaded()
{
  console.log('Model Loaded!');
}