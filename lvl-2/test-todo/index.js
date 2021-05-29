function getData() {
    axios.get("https://api.vschool.io/johnsmith2/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data) {
    clearList()
    for(let i = 0; i < data.length; i++) {
        const h1 = document.createElement('h1')
        h1.textContent = data[i].title
        document.getElementById('todo-list').appendChild(h1)
    }
}

function clearList() {
    const el = document.getElementById('todo-list')
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const newTodo = {
        title: todoForm.title.value
    }

    todoForm.title.value = ""

    axios.post("https://api.vschool.io/johnsmith2/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})