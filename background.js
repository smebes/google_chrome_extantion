chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'yellow';
}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "downloadImage") {
//       chrome.downloads.download({
//           url: request.url, // İndirilecek dosyanin URL'si
//           filename: request.filename // Opsiyonel: İndirilen dosyanin kaydedileceği dosya adi ve yolu
//       }, function(downloadId) {
//           console.log('Download baslatildi, ID:', downloadId);
//       });
//   }
// });
