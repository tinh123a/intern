let text = '\u24D4';
text = JSON.stringify(text);
document.getElementById("stringify").innerHTML = JSON.parse(text);
console.log(JSON.parse(text));