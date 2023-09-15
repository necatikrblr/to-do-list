const input = document.getElementById("input");
const ekleButton = document.getElementById("ekle");
const liste = document.querySelector(".list-group");
const silButton = document.getElementById("sil");

const kayitliGorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

kayitliGorevler.forEach((gorevMetni) => {
  const gorevItem = document.createElement("li");
  gorevItem.classList.add("list-group-item", "fs-4");
  gorevItem.textContent = gorevMetni;

  const silButon = document.createElement("button");
  silButon.classList.add("fa-solid", "fa-xmark", "fs-1", "float-end", "bg-transparent");
  silButon.style.color = "red";
  silButon.addEventListener("click", () => {
    liste.removeChild(gorevItem);
    const index = kayitliGorevler.indexOf(gorevMetni);
    if (index !== -1) {
      kayitliGorevler.splice(index, 1);
      localStorage.setItem("gorevler", JSON.stringify(kayitliGorevler));
    }
  });

  gorevItem.appendChild(silButon);
  liste.appendChild(gorevItem);
});

ekleButton.addEventListener("click", () => {
  const yeniGorev = input.value.trim();

  if (yeniGorev !== "") {
    const gorevItem = document.createElement("li");
    gorevItem.classList.add("list-group-item", "fs-4");
    gorevItem.textContent = yeniGorev;

    const silButon = document.createElement("button");
    silButon.classList.add("fa-solid", "fa-xmark", "fs-1", "float-end", "bg-transparent");
    silButon.style.color = "red";
    silButon.addEventListener("click", () => {
      liste.removeChild(gorevItem);
      const index = kayitliGorevler.indexOf(yeniGorev);
      if (index !== -1) {
        kayitliGorevler.splice(index, 1);
        localStorage.setItem("gorevler", JSON.stringify(kayitliGorevler));
      }
    });

    gorevItem.appendChild(silButon);
    liste.appendChild(gorevItem);

    kayitliGorevler.push(yeniGorev);
    localStorage.setItem("gorevler", JSON.stringify(kayitliGorevler));

    input.value = "";
  }
});

silButton.addEventListener("click", () => {
  liste.innerHTML = "";
  localStorage.removeItem("gorevler");
});
