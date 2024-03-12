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
    document.body.style.backgroundColor = color; // Belirlenen rengi sayfanın arka planına uygular.
}


//Bu dosyada, applyColor id'li butona bir 'click' event listener eklenmiştir. 
//Kullanıcı bu butona tıkladığında, chrome.scripting.executeScript fonksiyonu sayesinde, 
//aktif sekmenin document.body.style.backgroundColor özelliği, seçilen renge ayarlanır. 
//Bu işlem, setPageBackgroundColor fonksiyonunun sayfa üzerinde çalıştırılmasıyla gerçekleşir. 
//args: [color] kullanımı, fonksiyona parametre olarak rengi geçmemizi sağlar.