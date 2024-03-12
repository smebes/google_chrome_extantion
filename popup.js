// document.getElementById('applyColor').addEventListener('click', async () => {
//     let color = document.getElementById('bgColorPicker').value;
//     let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//     chrome.scripting.executeScript({
//         target: {tabId: tab.id},
//         function: setPageBackgroundColor,
//         args: [color]
//     });
// });

// function setPageBackgroundColor(color) {
//     document.body.style.backgroundColor = color;
// }

document.getElementById('applyColor').addEventListener('click', async () => {
    let color = document.getElementById('bgColorPicker').value; // Kullanıcının seçtiği rengi alır.
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true}); // Aktif sekmenin bilgisini alır.
    chrome.scripting.executeScript({
        target: {tabId: tab.id}, // Aktif sekmenin ID'sini hedef olarak belirler.
        function: setPageBackgroundColor, // Uygulanacak fonksiyonu belirler.
        args: [color] // Fonksiyona argüman olarak rengi geçer.
    });
});

// Sayfanın arka plan rengini değiştiren fonksiyon, popup.js içinde tanımlı olmasına rağmen, sayfa içerisinde çalışır.
function setPageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}