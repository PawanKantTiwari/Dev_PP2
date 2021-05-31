let videoPlayer = document.querySelector("video");// video element ko access karne ke liye
let constarints = {video: true};// jis jis ki hame access chahiye , unko ham constraints me dalenge.
let mediaRecorder;//2nd

(async function(){
    let mediaStream = await navigator.mediaDevices.getUserMedia(constarints); //isase ham user se permission ko access ke liye puchh skte hain.
    //chuki "navigator.mediaDevices.getUserMedia()" ek promisified functions hain i.e. ye ek promise return karte hain,,,, isliye ham await and async function ka use kar rahe hain
    //console.log(mediaStream);
    videoPlayer.srcObject = mediaStream;//jo bhi cheez mediaStream me aa rahi hai usko ham videoPlayer ke "srcObj" me assign kr rahe hain
    mediaRecorder = new MediaRecorder(mediaStream);//2nd : MediaReorder => provides functionality to easily record media. It is created using the MediaRecorder() constructor.
    console.log(mediaRecorder);
    mediaRecorder.onstart = function(){
        console.log("inside onstart")
    }
    
    mediaRecorder.onstop = function(){
        console.log("inside onstop")
    }
    
    mediaRecorder.ondataavailable = function(){
        console.log("inside ondataavailable")
    }
})();

//upper likhe asunc function ko ham aise bhi likh sakte hain==>
                        // let mediaStreamKaPromise = navigator.mediaDevices.getUserMedia(constarints);
                        // mediaStreamKaPromise.then(function(mediaStream){
                        // videoPlayer.srcObject = mediaStream;
                        // })
