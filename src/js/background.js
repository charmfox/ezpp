import { setDisabled, setHidden } from './actions';

const tabActiveStatuses = [];
let timeout = null;

chrome.pageAction.onClicked.addListener((tab) => {
  const tabId = tab.id;
  const isActive = (tabActiveStatuses[tabId] = !tabActiveStatuses[tabId]);

  clearTimeout(timeout);
  if (isActive) {
    chrome.tabs.sendMessage(tabId, setDisabled(false));
    chrome.tabs.sendMessage(tabId, setHidden(false));
  } else {
    chrome.tabs.sendMessage(tabId, setHidden(true));
    timeout = setTimeout(() => chrome.tabs.sendMessage(tabId, setHidden(true)), 400);
  }

  chrome.pageAction.setIcon({
    tabId,
    path: isActive ? 'icon48-active.png' : 'icon48.png',
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.toLowerCase().match(/^https?:\/\/(osu|new).ppy.sh\/([bs])\/(\d+)/)) {
    chrome.pageAction.show(tabId);
    tabActiveStatuses[tabId] = false;
  }
});
