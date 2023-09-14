
const input = document.getElementById("input");
const ekleButton = document.getElementById("ekle");
const liste = document.querySelector(".list-group");
const silButton = document.getElementById("sil");


ekleButton.addEventListener("click", () => {
  const yeniGorev = input.value.trim();

  if (yeniGorev !== "") {
    const gorevItem = document.createElement("li");
    gorevItem.classList.add("list-group-item");
    gorevItem.textContent = yeniGorev;
    gorevItem.classList.add("fs-4");

    const silButon = document.createElement("button");
    silButon.classList.add("fa-solid","fa-xmark", "fs-1", "float-end" , "bg-transparent");
    silButon.style = "color:red";
    silButon.addEventListener("click", () => {
      liste.removeChild(gorevItem);
    });

    gorevItem.appendChild(silButon);
    liste.appendChild(gorevItem);

    input.value = "";
  }
});


silButton.addEventListener("click", () => {
  liste.innerHTML = "";
});
