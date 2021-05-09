let inputMsg = document.querySelector(".msg-box");
let chatWindow = document.querySelector(".chat-window");

let userName = prompt("Enter your name : ");

inputMsg.addEventListener("keypress",cbFunction);

function cbFunction(e)
{
    if(e.key == "Enter")
    {
        //creating a new div for new Message
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("right-chat"); //this will add a class {that is =>chat} to the newly created div {that is => chat}.
        chatDiv.textContent = userName + " : " + inputMsg.value;
        chatWindow.append(chatDiv);
        inputMsg.value = "";
    }
}