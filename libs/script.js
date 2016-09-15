var tags = document.getElementsByTagName('script');
var i, l, s, d, src, script;

for (i = 0, l = tags.length; i !== l; i++) {
  s = tags[i];
  if (s.type === "text/x-markdown") {
    src = s.getAttribute('src');
    if(src == null || src == '') {
        script = s.innerHTML;
    } else {
        $.ajax({
          url: src,
          async: false,
          success: function (data){
            script = data;
          }
        });
    }
    d = document.createElement('div');
    d.innerHTML = (new Markdown.Converter()).makeHtml(script);
    s.parentNode.insertBefore(d, s);
  }
}
