let idExample;
let classExample;

window.onload = function() {
    idExample = document.getElementById("division-tag");
    classExample = document.getElementsByClassName("class-tag");
    alert(classExample[1].innerHTML);
}