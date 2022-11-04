var target = document.querySelector("head > title");

function notify(title, changed) {
  title = title.split(" ");
  console.log(title);
  if (title.includes("Advertisement") && title.includes("Spotify")) {
    console.log("AD detected, muting the tab");
    chrome.runtime.sendMessage({ action: "mute" });
  } else {
    chrome.runtime.sendMessage({ action: "unmute" });
  }
}

var obeserver = new window.MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    notify(mutation.target.textContent, true);
  });
});

obeserver.observe(target, {
  subtree: true,
  characterData: true,
  childList: true,
});
