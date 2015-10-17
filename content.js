var meta = document.querySelector('link[rel=amphtml]');
var url = meta && meta.getAttribute('href');
if (url) {
  location.href = url
}