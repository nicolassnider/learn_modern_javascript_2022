/* strollto */
function strollto(id) {
  var el = document.getElementById(id);
  var top = el.offsetTop;
  window.scrollTo(0, top);
}