


const videoGrid = document.getElementById("video-grid");
const myVideo = document.createElement('video');

// const videoGrid2 = document.getElementById("video-grid");
// const myVideo2 = document.createElement('video');
// myVideo2.muted = true;



myVideo.muted = true;

let myVideoStream;

navigator.mediaDevices.getUserMedia({video: true,  audio: true }).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    // addVideoStream(myVideo2, stream);
    // const video = document.querySelector('video');
    // video.muted = true
    // addVideoStream(video, stream);
    // video.srcObject = stream;
    // video.onloadedmetadata = function(e) {
    //   video.play();
    // };
  });

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
      };
    videoGrid.append(video)
}
