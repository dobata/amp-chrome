var meta = document.querySelector('link[rel=amphtml]');
var ampUrl = meta && meta.getAttribute('href');

if (ampUrl) {
  var currentUrl = window.location.href;
  stateManager.forUrl(currentUrl).getAmpSetting().then(function (verdict) {
    if (verdict === 'on') {
      var redirectUrl = ampUrl + config.urlAppend + encodeURIComponent(currentUrl);
      location.href = redirectUrl;
    }
  });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('received', request);
    if( request.message === "navigateAfterSettingsUpdate" ) {
      window.location.href = request.url;
    }
  }
);