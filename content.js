// capture question
let askQuestionButton = document.getElementsByClassName("puppeteer_test_add_question_button")[0];
let questionText;

askQuestionButton.onclick = () => setTimeout(() => {
    try{
        questionText = document.getElementsByClassName("puppeteer_test_selector_input focus-visible")[0];
        if(questionText){
            try{
                questionText.onchange = () => {
                    //send message to popup
                    chrome.runtime.sendMessage({ question: questionText.value });
                    console.log(questionText.value);
                }
            }catch(e){
                console.log(e);
            }    
        }
    }catch(e){}
},0);




// recieve message from background 
// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendRequest){
//     console.log(message.msg);
// }