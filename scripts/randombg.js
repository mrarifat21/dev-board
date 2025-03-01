document.getElementById("theme-btn").addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random().toFixed(1);
  const bgColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  document.getElementById("body").style.background = bgColor;
});

