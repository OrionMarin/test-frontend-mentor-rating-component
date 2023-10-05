const scoreButtons = document.querySelectorAll(".oval");
const submitButton = document.querySelector("#submit");
const sectionBefore = document.getElementById("before");
const sectionAfter = document.getElementById("after");
let summary = document.querySelector(".summaryText").innerHTML;


let rate = null;

scoreButtons.forEach(button => {
    button.addEventListener("click", selectRate);
});

submitButton.addEventListener("click", submit);

function selectRate() {
    let checked = document.querySelector(".checked");
    if (checked) {
        checked.classList.remove("checked");
    }
    this.classList.add("checked");
    rate = this.innerHTML;
}

function submit() {
    if (rate) {
        console.log(rate);
        sectionBefore.style.display = "none";
        sectionAfter.style.display = "flex";
        document.querySelector(".summaryText").innerHTML = summary.replace("(rate)", rate);
    }
}

