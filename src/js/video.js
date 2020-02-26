 const video1btn = document.getElementById("video1Btn");
 const video2btn = document.getElementById("video2Btn");
 const video3btn = document.getElementById("video3Btn");
 const video4btn = document.getElementById("video4Btn");
 const video1 = document.getElementById("video1");
 const video2 = document.getElementById("video2");
 const video3 = document.getElementById("video3");
 const video4 = document.getElementById("video4");
 const mainVideo = document.getElementById("mainVideo");
 const playAndPause = (video) => {
     if (video.paused) {
         mainVideo.pause();
         video.play()

     } else {
         video.pause();
     }
 }

 video1btn.addEventListener("click", () => {
     playAndPause(video1);
     video2.pause();
     video3.pause();
     video4.pause();
 });

 video2btn.addEventListener("click", () => {
     playAndPause(video2);
     video1.pause();
     video3.pause();
     video4.pause();
 });

 video3btn.addEventListener("click", () => {
     playAndPause(video3);
     video2.pause();
     video1.pause();
     video4.pause();
 });

 video4btn.addEventListener("click", () => {
     playAndPause(video4);
     video2.pause();
     video3.pause();
     video1.pause();
 });



 var removeItemFromArr = (arr, item) => {
     var i = arr.indexOf(item);
     i !== -1 && arr.splice(i, 1);
 };




 const clickAnyVideo = (video) => {
     AllVideo = document.querySelectorAll("video");
     let allIdsVideo = [];

     AllVideo.forEach(function (eachVideo) {

         const idEach = eachVideo.id;
         return allIdsVideo.push(idEach);

     });


     let lessId;
     let idEl;
     lessId = video.id;



     removeItemFromArr(allIdsVideo, lessId);
     console.log(allIdsVideo);
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


 console.log(video1.duration);






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