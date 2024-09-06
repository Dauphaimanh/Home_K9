// What is this effect

var content = "<p>This incarnation of Rodan has a larger wingspan compared to any of his previous incarnations. His physique overall bears a strong resemblance to a bird of prey. His head possesses a large, heavy beak lined with tooth-like spikes and a pair of horn-like spurs curl down from the back of his skull. He has a pair of ridge-like brows and beady, yellow eyes with circular pupils. He possesses large, digitigrade avian legs, with sickle-shaped hooked claws on each foot's three large toes, and a smaller near-vestigial toe at the back similar to tyrannosaurids.</p>"
var index = "";
var word = "";

for (var i = 0; i <= content.length; i++) {
    var character = content.charAt(i);
    if (character === " " || i === content.length) {
        index += `<span>${word}</span>` + (i === content.length ? "" : " ");
        word = "";
    } else {
        word += character;
    }
    if(i === content.length){
        break;
    }
}
document.write(index);


var spans = document.querySelectorAll("span");
var position = 0;
function changeColor() {
    for (var j = 0; j < spans.length; j++) {
        spans[j].style.color = "#020403";
    }
    spans[position].style.color = "#ff6347";
    position++;
    if (position >= spans.length) {
        position = 0; 
    }
    setTimeout(changeColor, 500);
}
changeColor();