let streaming = false;

let video = document.getElementById("video");

let canvasOutput = document.getElementById('canvasOutput');
let videoCtx = canvasOutput.getContext('2d');

let stream = null;

let videoWidth=320;
let videoHeight=0;

function startCamera(){
    console.log("start camera");
    // initUI();

    if (streaming) return;

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
        .then(function(s) {
            stream = s;
            video.srcObject = s;
            video.play();
        })
        .catch(function(err) {
        console.log("An error occured! " + err);
    });

    video.addEventListener("canplay", function(ev){
        if (!streaming) {
          videoHeight = video.videoHeight / (video.videoWidth/videoWidth);

          video.setAttribute("width", videoWidth);
          video.setAttribute("height", videoHeight);
          canvasOutput.width = videoWidth;
          canvasOutput.height = videoHeight;
          
          console.log(videoWidth,  videoHeight);

          streaming = true;
        }
        startVideoProcessing();
      }, false);
}

let src = null;
let dstC1 = null;
let dstC3 = null;
let dstC4 = null;

function startVideoProcessing() {
    if (!streaming) { console.warn("Please startup your webcam"); return; }
    stopVideoProcessing();

    requestAnimationFrame(processVideo);
  }

function drawBbox() {
    rect= {x: 50, y: 50, w: 50, h: 50};

    videoCtx.lineWidth = 3;
    videoCtx.strokeStyle = 'green';
    // console.log(rect);

    videoCtx.strokeRect( rect.x, rect.y, rect.w, rect.h);

    // console.log(videoCtx);
}

function processVideo() {
    //stats.begin();
    videoCtx.drawImage(video, 0, 0, videoWidth, videoHeight);

    drawBbox();
    
    //stats.end();
    requestAnimationFrame(processVideo);
}

function initUI() {
    stats = new Stats();
    stats.showPanel(0);
    document.getElementById('container').appendChild(stats.dom);
  }

function stopVideoProcessing() {
    if (src != null && !src.isDeleted()) src.delete();
    if (dstC1 != null && !dstC1.isDeleted()) dstC1.delete();
    if (dstC3 != null && !dstC3.isDeleted()) dstC3.delete();
    if (dstC4 != null && !dstC4.isDeleted()) dstC4.delete();
}
