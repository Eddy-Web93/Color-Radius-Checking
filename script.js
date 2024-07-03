const section = document.getElementById("section");
const input = document.getElementById("input");
const body = document.querySelector(".body")

input.addEventListener("change", ()=>{
    section.style.borderRadius = input.value;
    section.style.backgroundColor = input.value;
    input.style.borderColor = input.value;
    body.style.background = `linear-gradient(to right, #9dd0ffgi, ${input.value})`;
})