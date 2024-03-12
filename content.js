let headerTitleContent = document.querySelector('.header-title').textContent.trim();
chrome.runtime.sendMessage({headerTitle: headerTitleContent});
