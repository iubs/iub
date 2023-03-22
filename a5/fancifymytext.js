function makehuge() {
    document.getElementById("inputText1").style.fontSize = "24pt";
    alert("Bigger!!");
}
function FancyShmancy() {
    document.getElementById("inputText1").style.fontWeight = "bold";
    document.getElementById("inputText1").style.color = "blue";
    document.getElementById("inputText1").style.textDecoration = "underline";
    alert("FancyShmancy!!!");
}
function BoringBetty() {
    document.getElementById("inputText1").style.fontWeight = "";
    document.getElementById("inputText1").style.color = "black";
    document.getElementById("inputText1").style.textDecoration = "";
    alert("BoringBetty!!!");
}
function Moo() {
    var string = document.getElementById("inputText1").value;
    var upperCase = string.toUpperCase();
    document.getElementById("inputText1").value = upperCase;
    var suffix = upperCase.split(".");
    var string2 = suffix.join(".-Moo ");
    document.getElementById("inputText1").value = string2;
}

