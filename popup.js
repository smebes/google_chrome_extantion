document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: getPageDetails
        }, (results) => {
            if (results && results.length > 0) {
                const headerTitle = results[0].result;
                if (headerTitle) {
                    document.getElementById('headerTitle').textContent = headerTitle;
                } else {
                    document.getElementById('headerTitle').textContent = "Başlık bulunamadı.";
                }
            }
        });
    });
});

function getPageDetails() {
    const titleElement = document.getElementById('productTitle') || document.querySelector('.product-title-word-break');
    return titleElement ? titleElement.textContent.trim() : null;
}
