let question=document.getElementById("ques");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    question.innerHTML = message.question;
});