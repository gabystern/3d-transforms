
function bedPrice() {
  let e = document.getElementById("bedsize");
  let value = e.options[e.selectedIndex].value;
  let div = document.getElementById("pricetag");
  div.innerHTML = value;
}

function cartAlert(){
  alert("You're one step closer to your dream sleep. Your bed has been added to your cart.")
}
