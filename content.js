console.log("Extension is starting ?");
  
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse){
    console.log(message.txt);
    if(message.txt === "Hello"){
        let paragraphs = document.getElementsByTagName('a');
            for(elt of paragraphs){   
                elt.innerHTML = 'I love you Yas, to Deneb Star and back!';
            }
    }
}
 
