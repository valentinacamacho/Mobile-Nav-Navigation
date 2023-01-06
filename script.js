/*se crearon variables para que contengan algunos selectores de clase y clase de diseño del Dom */
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li ");

/*se llama  cada parametro para que reciba los dos argumentos de las clases  de css*/
listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    
    contents[idx].classList.add("show");
    item.classList.add("active");
    
  });
});

/*cada vez que pase en cada nav se va elimar y va a cambiar la imagen  */
function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
