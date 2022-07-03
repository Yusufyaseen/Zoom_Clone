// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
// import { io } from "/socket.io-client";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";


const socket = io();


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

  socket.emit("join-room", ROOM_ID);
  socket.on("user-connected", () => {
    newConnectedUser();
  });
  const newConnectedUser = () => {
    console.log("New user connected");
  }
  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
      };
    videoGrid.append(video)
}
