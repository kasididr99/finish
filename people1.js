// function toggleInfo(img){
//   const info = img.parentElement.querySelector('.info');
//   info.style.display =
//     info.style.display === 'block' ? 'none' : 'block';
// }
function toggleInfo(img) {
  const info = img.nextElementSibling;
  info.style.display =
    info.style.display === "block" ? "none" : "block";
}
