function getData(){
    axios.get("https://api.vschool.io/bradduffy/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const titl = document.createElement('h1')
        titl.textContent = data[i].title
        document.getElementById('todoList').appendChild(titl)
        
        const desc = document.createElement('h3')
        desc.textContent = data[i].description
        document.getElementById('todoList').appendChild(desc)

        const pri = document.createElement('h3')
        pri.textContent = data[i].price
        document.getElementById('todoList').appendChild(pri)
    }
}

function clearList(){
    const el = document.getElementById('todoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

getData()

const todoForm = document.todoForm
todoForm.addEventListener("submit", function (e){
    e.preventDefault()

    const newTodo = {
       title: todoForm.title.value,
       description: todoForm.description.value,
       price: todoForm.price.value,
       imgUrl: todoForm.imgUrl.value

    } 

    console.log("The title input is" + todoForm.title.value)

    axios.post("https://api.vschool.io/bradduffy/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
    todoForm.title.value = ""

})
