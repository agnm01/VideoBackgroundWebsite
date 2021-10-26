const lookUpOptions = {
    "ocean": {
        fileUrl: "./assets/video.mp4",
        caption: "Ocean"
    },
    "waterfall": {
        fileUrl: "./assets/video1.mp4",
        caption: "Waterfall"
    },
    "volcano": {
        fileUrl: "./assets/video2.mp4",
        caption: "Volcano"
    },
    "stars": {
        fileUrl: "./assets/video3.mp4",
        caption: "Stars"
    },
    "river": {
        fileUrl: "./assets/video4.mp4",
        caption: "River"
    },
    "mountain": {
        fileUrl: "./assets/video5.mp4",
        caption: "Mountain"
    },
    "sunset": {
        fileUrl: "./assets/video6.mp4",
        caption: "Sunset"
    }
};

let dayNight = document.querySelector('.day-night');
let menuToggle = document.querySelector('.menu-toggle');
let body = document.querySelector('body');
let nav = document.querySelector('.nav');

dayNight.onclick = function() {
    body.classList.toggle('dark');
    dayNight.classList.toggle('active');
}

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}

function changeVideo() {
    let selectedVideo = lookUpOptions[document.getElementById("selectVideo").value];
    document.getElementById("bgVideo").setAttribute('src', selectedVideo.fileUrl);
    document.getElementById("title").innerHTML = selectedVideo.caption;
}

changeVideo();

document.getElementById("selectVideo").addEventListener("change", changeVideo);