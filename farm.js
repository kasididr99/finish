function toggleInfo(img){
  const info = img.nextElementSibling;
  info.style.display =
    info.style.display === "block" ? "none" : "block";
}
