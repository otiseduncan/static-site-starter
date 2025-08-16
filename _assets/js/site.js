// Compute base prefix for GitHub Pages subpaths so that /about/ becomes /repo/about/
(function() {
  var prefix = "";
  // Detect GitHub Pages when hosted at user.github.io/repo
  if (location.hostname.endsWith("github.io")) {
    var parts = location.pathname.split("/").filter(Boolean);
    if (parts.length > 0) {
      // First segment is the repo name on project pages
      prefix = "/" + parts[0];
    }
  }
  // Rewrite <a data-site-link> and any [href] that begins with "/"
  document.querySelectorAll('a[data-site-link]').forEach(function(a){
    var href = a.getAttribute('href');
    if (!href) return;
    if (href.startsWith("/") && prefix) a.setAttribute('href', prefix + href);
    // mark active
    try {
      var current = location.pathname.replace(/\/$/, "");
      var target = a.getAttribute('href').replace(/\/$/, "");
      if (target === "" ) target = "/";
      // when using prefix, compare without it
      var cmp = current;
      if (prefix && cmp.startsWith(prefix)) cmp = cmp.slice(prefix.length) || "/";
      var tgt = target;
      if (prefix && tgt.startsWith(prefix)) tgt = tgt.slice(prefix.length) || "/";
      if (tgt === cmp) a.classList.add("active");
    } catch(e){}
  });
  // Rewrite assets marked with data-site-asset (link[href], script[src], img[src])
  document.querySelectorAll('[data-site-asset][href^="/"]').forEach(function(el){
    if (prefix) el.setAttribute('href', prefix + el.getAttribute('href'));
  });
  document.querySelectorAll('[data-site-asset][src^="/"]').forEach(function(el){
    if (prefix) el.setAttribute('src', prefix + el.getAttribute('src'));
  });
  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
