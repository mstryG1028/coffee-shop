
//    FOR SEARCH BUTTON
let buttons = document.getElementById("btn");
let inputs = document.getElementById("input");
buttons.addEventListener("click", (e) => {
  if (inputs.value == "bed") {
    window.open(
      "https://www.google.com/search?q=best+background+images+for+furniture+website&sca_esv=591490335&rlz=1C1CHBF_enIN1002IN1002&tbm=isch&source=lnms&sa=X&ved=2ahUKEwj8naiBhZSDAxXexjgGHfC1BA0Q_AUoAXoECAIQAw&cshid=1702732540399944&biw=1366&bih=641&dpr=1"
    );
  } else if (inputs.value == "kitchen") {
    window.open("");
  } else if (inputs.value == "hall") {
    window.open("");
  } else if (inputs.value == "chair") {
    window.open(
      "https://www.google.com/search?q=tables+and+chairs&sca_esv=591490335&rlz=1C1CHBF_enIN1002IN1002&tbm=isch&source=lnms&sa=X&ved=2ahUKEwiuqcSljpSDAxU11jgGHYqiAEkQ_AUoAnoECAMQBA"
    );
  } else if (inputs.value == "door") {
    window.open("");
  } else if (inputs.value == "cupboard") {
    window.open(
      "https://www.google.com/search?q=cupboard&tbm=isch&ved=2ahUKEwjqjq6njpSDAxXzamwGHbAbCr4Q2-cCegQIABAA&oq=cupbo&gs_lcp=CgNpbWcQARgAMg0IABCABBCKBRBDELEDMggIABCABBCxAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABCABBCKBRBDUKkCWMgyYKRUaABwAHgEgAHgAYgB0BCSAQUwLjkuM5gBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=u6x9ZarFDPPVseMPsLeo8As&rlz=1C1CHBF_enIN1002IN1002"
    );
  } else if (inputs.value == "dinning table") {
    window.open("");
  }
});

// FOR CATEGORY BUTTON
function opencategory() {
  window.open((url = "category.html"));
}
function openloginpage() {
  window.open((url = "login.html"));
}

// FOR MENUBTN
const menubox = document.getElementById("menubox");
var display = 1;
function hide() {
  if (display == 0) {
    menubox.style.display = "none";
    display = 1;
  } else {
    menubox.style.display = "block";
    display = 0;
  }
}
