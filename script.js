const link = document.querySelectorAll("main a");

link.forEach((a, i) => {
  a.addEventListener("mouseover", () => {
    if (i == 0) {
      a.textContent = "@Apkhoror";
    }
    if (i == 1) {
      a.textContent = "@Intuisi_ilahi";
    }
    if (i == 2) {
      a.textContent = "@Sendzxx";
    }
    if (i == 3) {
      a.textContent = "@Sendzx";
    }
  });
  a.addEventListener("mouseout", () => {
    if (i == 0) {
      a.innerHTML = "<i class='bx bxl-youtube'></i> YouTube";
    }
    if (i == 1) {
      a.innerHTML = "<i class='bx bxl-tiktok'></i> Tiktok";
    }
    if (i == 2) {
      a.innerHTML = "<i class='bx bxl-instagram'></i> Instagram";
    }
    if (i == 3) {
      a.innerHTML = "<i class='bx bxl-facebook'></i> Facebook";
    }
  });
});
