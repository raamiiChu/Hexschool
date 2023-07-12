let fn = function (){
    console.dir(this);
    this.style.backgroundColor = "orange";
};

let elements = document.querySelectorAll("li");

for (let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", fn);
}