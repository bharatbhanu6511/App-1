let nameField = document.getElementById("nameField")
let submitButton = document.getElementById("submitButton")
let messages = document.getElementById("messages")
let clearButton = document.getElementById("clearButton")
function create() {
    if (!messages && !clearButton) {
        messages = document.createElement("div")
        clearButton = document.createElement("button")
        messages.id = "messages"
        clearButton.id = "clearButton"
        clearButton.innerHTML = "clear"
        document.body.append(messages)
        document.body.append(clearButton)
        clearButton.addEventListener("click", () => {
            clearButton.remove()
            messages.remove()
            clearButton = null
            messages = null
        })
    }
    if (messages && clearButton) {

        messages.insertAdjacentHTML("beforeend", `<p>hello <b>${nameField.value}</b></p>`)
        nameField.value = ""
        nameField.focus()
    }
}
submitButton.addEventListener("click", create)
nameField.addEventListener("keyup", (e) => {
    if (e.key == "enter" || e.keyCode == 13) {
        create()
    }
})