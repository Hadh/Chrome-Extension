console.log('Background script is running.')

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log('Button clicked!');
    let msg = {
        txt: "Hello"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}