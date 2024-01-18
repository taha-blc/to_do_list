const inputBox = document.querySelector("#input-box")
const listContainer = document.querySelector("#list-container")
const btn = document.querySelector(".button")

// console.log(inputBox)
console.log(listContainer)
// console.log(btn)

btn.addEventListener("click", () => {
    if (inputBox.value === '') {
        alert("you must write something")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = "";
})

listContainer.addEventListener("click", function (e) {
    console.log(e.target.tagName)
    if (e.target.tagName === "LI") {
        console.log("tklandi")
        e.target.classList.toggle("checked")
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
    // console.log(e)
})

