const countInput = document.getElementById("count");
const btnadd = document.getElementById("btnadd");
const btnsave = document.getElementById("btnsave");
const prevbox = document.getElementById("prev");

let prev = [];
let count = 0;
countInput.value = count;

btnadd.addEventListener("click", () => {
    count++;
    countInput.value = count;
});
btnsave.addEventListener("click", () => {
    if (count === 0) return;
    prev.push(count);
    prevbox.innerText = prev.join(",");
    count = 0;
    countInput.value = count;
});
