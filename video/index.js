let url= 'http://0.0.0.0:8080/api/frame/haar';

let data;
var img = new Image();   // Create new img element
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

async function demo() {
    console.log("demo");

    imgBase64= toCanvas();

    await postRequest(imgBase64);
    console.log("data", data);

    drawBbox();
}

function toCanvas(src= '108.jpg') {
    img.src =src; // Set source path
    //void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.drawImage(img, 0, 0, 960, 1280, 0, 0, 960, 1280);

    //console.log("img",img);
    dataURL= c.toDataURL('image/jpeg');
    imgBase64= dataURL.split(",")[1];
    return imgBase64;
}


function drawBbox() {
    rect_= data.bbox.split(" ");
    
    width= ctx.canvas.width;
    height= ctx.canvas.height;

    var rect = {x: rect_[0] * width, y:rect_[1] * height, h:rect_[2] * width, w:rect_[3] * height};
    console.log(rect);
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);

    return rect;
}




async function postRequest(imgBase64, id='108.jpg') {
    console.log("postRequest...");

    console.log("videoFrameApi");
    console.log(url);

    var obj = new Object();

    obj.id = id;
    obj.imgbase64  = imgBase64;
    var body= JSON.stringify(obj);
    // console.log(body);

    const response = await fetch(url, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });

    data = await response.json();
    // console.log("data ",data);
}



