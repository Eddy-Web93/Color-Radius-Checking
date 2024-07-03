const section = document.getElementById("section");
const input = document.getElementById("input");

input.addEventListener("change", ()=>{
    section.style.borderRadius = input.value;
    section.style.backgroundColor = input.value;
})