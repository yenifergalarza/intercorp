const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");
const mainVideo = document.getElementById("mainVideo");


const playingVideos = (videoUnique, pause1, pause2, pause3) => {
    playAndPause(videoUnique);
    pause1.pause();
    pause2.pause();
    pause3.pause();
};
const playAndPause = (video) => {
    if (video.paused) {
        mainVideo.pause();
        video.play()

    } else {
        video.pause();
    }
};


const removeItemFromArr = (arr, item) => {
    let i = arr.indexOf(item);
    i !== -1 && arr.splice(i, 1);
};

const clickAnyVideo = (video) => {
    let AllVideo = document.querySelectorAll("video");
    let allIdsVideo = [];

    AllVideo.forEach(eachVideo => {

        const idEach = eachVideo.id;
        return allIdsVideo.push(idEach);

    });
    let lessId = "";
    let idEl = "";
    lessId = video.id;
    removeItemFromArr(allIdsVideo, lessId);

    allIdsVideo.forEach(element => {
        idEl = document.getElementById(`${element}`);
        return idEl.pause();
    });
};

video1.addEventListener("click", () => {
    clickAnyVideo(video1);
});

video2.addEventListener("click", () => {
    clickAnyVideo(video2);
});


video3.addEventListener("click", () => {
    clickAnyVideo(video3);
});

video4.addEventListener("click", () => {
    clickAnyVideo(video4);
});
mainVideo.addEventListener("click", () => {
    clickAnyVideo(mainVideo);
});

const dateToSpan = (eachVideo, idEl) => {

    eachVideo.onloadedmetadata = () => {

        var date = new Date(null);
        date.setSeconds(eachVideo.duration); // specify value for SECONDS here
        var result = date.toISOString().substr(14, 5);
        document.getElementById(idEl).innerHTML = result;
    };
}

dateToSpan(video1, "span1");
dateToSpan(video2, "span2");
dateToSpan(video3, "span3");
dateToSpan(video4, "span4");