const form = document["addItem"]

const list = document.getElementById("list")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const theList = form.theList.value
    form.theList.value = ""

    const newItem = document.createElement("li")
    newItem.textContent = theList + "" 
    document.getElementById("list").append(newItem)
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    newItem.append(editButton)
    const xButton = document.createElement("button")
    xButton.textContent = "x"
    newItem.append(xButton)
    xButton.addEventListener("click", function (e) {
        xButton.textContent = ""
        e.target.parentNode.remove()
    })

    
})

// xButton.addEventListener(onclick, function() {
//     xButton.textContent = ""
// })
