let intervalId;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    intervalId = setInterval(() => {
      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        func: () => document.body.click()
      });
    }, message.interval);
  } else if (message.action === "stop") {
    clearInterval(intervalId);
  }
});
