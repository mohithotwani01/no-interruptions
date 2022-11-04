chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "mute") {
    chrome.tabs.update(sender.tab.id, { muted: true });
  } else if (request.action === "unmute") {
    chrome.tabs.update(sender.tab.id, { muted: false });
  }
  return true;
});
