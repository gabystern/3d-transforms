
function bedPrice() {
  let e = document.getElementById("bedsize");
  let value = e.options[e.selectedIndex].value;
  let div = document.getElementById("pricetag");
  div.innerHTML = value;
}
