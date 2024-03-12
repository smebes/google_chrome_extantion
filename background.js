chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    function: setPageBackgroundColor,
  });
});

function setPageBackgroundColor() {
  document.body.style.backgroundColor = 'yellow';
}



// {
//   "manifest_version": 3, // Manifest dosyasının sürümü, bu yeni API'ları ve güvenlik standartlarını kullanmanızı sağlar.
//   "name": "Arka Planı Sarı Yap", // Eklentinizin adı.
//   "version": "1.0", // Eklentinizin sürümü.
//   "description": "Aktif sekmenin arka planını seçilen renge çevirir.", // Eklentinizin ne yaptığını açıklayan kısa bir açıklama.
//   "icons": { "128": "icon.png" }, // Eklenti için kullanılan ikon. Tarayıcı araç çubuğunda ve eklenti yönetim sayfasında gösterilir.
//   "permissions": [ "activeTab", "scripting" ], // Eklentinizin ihtiyaç duyduğu izinler. activeTab, aktif sekme üzerinde işlem yapmanızı sağlar. scripting, sayfa içeriğinde script çalıştırmanızı sağlar.
//   "background": { "service_worker": "background.js" }, // Arka planda çalışan script. Bu örnekte, aktif sekmenin arka plan rengini değiştirmek için kullanılmaz ama genel yapı için burada tanımlanmıştır.
//   "action": {
//     "default_icon": "icon.png", // Eklenti simgesi.
//     "default_title": "Sarıya Çevir", // İmleç eklenti simgesinin üzerine geldiğinde gösterilen metin.
//     "default_popup": "popup.html" // Kullanıcı eklenti simgesine tıkladığında açılan HTML dosyası.
//   }
// }