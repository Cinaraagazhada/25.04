const add = document.querySelector(".add");
const start = document.querySelector(".button");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let desc = document.createElement("div");
desc.classList.add("desc")


let createCount = 0;
add.addEventListener("click", () => {
    createCount++;

    if (createCount === 1) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "newDiv");
        const input = document.createElement('input');
        var remove = document.createElement("i")
        remove.classList.add("fa-solid", "fa-trash", "remove")
        const button = document.createElement('button');
        button.classList.add("btn", "btn-success");
        button.innerText = "Save";


        newDiv.append(input, button, remove);


        button.addEventListener("click", () => {
            const title = document.createElement("p");
            title.classList.add("newP")
            title.innerText = input.value;
            desc.append(title)
            newDiv.append(desc)
            input.value = "";
        })
        document.body.append(newDiv)
        remove.addEventListener("click", () => {
            desc.remove();
        })
    }

})
let intervalId;

let secondCount = 0;
let minuteCount = 25;
start.addEventListener("click", () => {


    intervalId = setInterval(() => {
        secondCount--;
        if (secondCount >= 0) {

            minute.innerText = minuteCount;
            second.innerText = secondCount;

        }
        else {
            secondCount = 59;
            minuteCount--;
        }

    }, 1000)


})

reset.addEventListener("click", () => {
    clearInterval(intervalId);
    minute.innerText = "25";
    minuteCount = 25
    second.innerText = "00";
    secondCount = 0
})

pause.addEventListener("click", () => {
    clearInterval(intervalId);
})