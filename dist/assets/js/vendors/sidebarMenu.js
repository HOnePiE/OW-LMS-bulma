"use strict";
!(function () {
  var a = window.location.href,
    n = a.replace(
      window.location.protocol + "//" + window.location.host + "/",
      ""
    );
  document.querySelectorAll("ul#sidebarnav a").forEach(function (e) {
    if (e.href === a || e.href === n)
      for (
        var t = e;
        t.parentElement && !t.parentElement.classList.contains("sidebar-nav");

      )
        "LI" === t.parentElement.tagName && t.parentElement.querySelector("a")
          ? (t.parentElement.querySelector("a").classList.add("active"),
            t.parentElement.parentElement.classList.contains("sidebarnav") ||
              t.parentElement.classList.add("active"))
          : t.parentElement.querySelector("a")
          ? "UL" === t.parentElement.tagName &&
            t.parentElement.classList.add("in")
          : t.parentElement.classList.add("active"),
          (t = t.parentElement);
  });
})();
