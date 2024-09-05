let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");


function fromMsgChatbot() {
    let chatMsgLength = chatbotMsgList.length;

    let fromMsg = chatbotMsgList[Math.ceil(Math.random() * chatMsgLength) - 1];

    let fromMsgContainer = document.createElement("div");
    fromMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(fromMsgContainer);

    let fromMsgEl = document.createElement("span");
    fromMsgEl.classList.add("msg-from-chatbot");
    fromMsgEl.textContent = fromMsg;
    fromMsgContainer.appendChild(fromMsgEl);

}
sendMsgBtnEl.onclick = function() {
    let userMsg = userInputEl.value;

    let toMsgContainer = document.createElement("div");
    toMsgContainer.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(toMsgContainer);

    let toMsgEl = document.createElement("span");
    toMsgEl.classList.add("msg-to-chatbot");
    toMsgEl.textContent = userMsg;
    toMsgContainer.appendChild(toMsgEl);

    userInputEl.value = "";
    fromMsgChatbot();
}