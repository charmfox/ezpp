const tabActiveStatuses = [];

chrome.pageAction.onClicked.addListener((tab) => {
  const tabId = tab.id;
  const isActive = (tabActiveStatuses[tabId] = !tabActiveStatuses[tabId]);
  chrome.tabs.sendMessage(tabId, {
    active: isActive,
  });

  chrome.pageAction.setIcon({
    tabId,
    path: isActive ? 'icon48-active.png' : 'icon48.png',
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.toLowerCase().match(/^https?:\/\/(osu|new).ppy.sh\/([bs])\/(\d+)/)) {
    chrome.pageAction.show(tabId);
    chrome.tabs.executeScript(tabId, {
      file: 'extension.js',
    });

    tabActiveStatuses[tabId] = false;
  }
});
