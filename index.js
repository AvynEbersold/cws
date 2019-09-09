// jshint esversion: 9

let popups = [];

function Popup(id, definition){
  this.id = id;
  this.definition = definition;
  popups.push(this);
}

/////////////////////////////////////////////

let popup1 = new Popup("popup1", "Sorry, I forgot");
let popup2 = new Popup("popup2", "Sorry, I forgot");

/////////////////////////////////////////////

for(let i = 0; i < popups.length; i++){
  let popupDiv = document.getElementById(popups[i].id);
  popups[i].term = popupDiv.firstChild.innerHTML;
  popupDiv.addEventListener("mousedown", function(){
    let num = Array.from(this.id).splice(5, 6);
    let popup = popups[num - 1];
    let div = document.getElementById("popup" + num);
    if(div.firstChild.innerHTML !== popup.definition){
      div.firstChild.innerHTML = popup.definition;
      div.style.background = "linear-gradient(#666666, #EEEEEE)";
    } else {
      div.firstChild.innerHTML = popup.term;
      div.style.background = "linear-gradient(#EEEEEE, #666666)";
    }
  }, false);
}
