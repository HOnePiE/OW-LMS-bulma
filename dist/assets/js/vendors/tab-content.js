
function switchTab(tabId) {
  $(".is-active").removeClass("is-active");
  $(".tab-content > div").addClass("is-hidden");
  $("#" + tabId + "-tab").addClass("is-active");
  $("#" + tabId + "-tab-content").removeClass("is-hidden");
}