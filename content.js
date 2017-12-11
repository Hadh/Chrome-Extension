console.log("Extension is starting ?");
  
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "Hello"){
        let paragraphs = document.getElementsByTagName('p');
            for(elt of paragraphs){   
                elt.innerHTML = 'I love you Yasmine, to Deneb Star and back!';
            }
    }
}
 