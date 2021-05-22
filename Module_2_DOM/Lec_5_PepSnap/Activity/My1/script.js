let videoPlayer = document.querySelector("video");// video element ko access karne ke liye
let constarints = {video: true , audio: true};// jis jis ki hame access chahiye , unko ham constraints me dalenge.

(async function(){
    let mediaStream = await navigator.mediaDevices.getUserMedia(constarints); //isase ham user se permission ko ask kar skte hain.
    //chuki "navigator.mediaDevices.getUserMedia()" ek promisified functions hain i.e. ye ek promise return karte hain,,,, isliye ham await and async function ka use kar rahe hain
    
    //console.log(mediaStream);
    videoPlayer.srcObject = mediaStream;//jo bhi cheez mediaStream me aa rahi hai usko ham videoPlayer ke srcObj me assign kr rahe hain

})();
