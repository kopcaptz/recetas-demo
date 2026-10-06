(function () {
  document.addEventListener("change", function (e) {
    var box = e.target;
    if (!box.matches || !box.matches(".ing input")) return;
    var li = box.closest("li");
    if (li) li.classList.toggle("done", box.checked);
  });
})();
