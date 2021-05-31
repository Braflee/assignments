function getData(){
    axios.get("https://api.vschool.io/bradduffy/todo")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    clearList()
    for(let i = 0; i < data.length; i++){
        const chBox = document.createElement('input')
        chBox.setAttribute('type', 'checkbox')
        document.getElementById('todoList').appendChild(chBox)
        
        const titl = document.createElement('h1')
        titl.textContent = data[i].title
        document.getElementById('todoList').appendChild(titl)

        const desc = document.createElement('h3')
        desc.textContent = data[i].description
        document.getElementById('todoList').appendChild(desc)

        const pri = document.createElement('h3')
        pri.textContent = data[i].price
        document.getElementById('todoList').appendChild(pri)

        const imgU = document.createElement("img")
        imgU.src = data[i].imgUrl
        document.getElementById('todoList').appendChild(imgU)
        
        const button = document.createElement('button')
        button.textContent = 'Delete'
        document.getElementById('todoList').appendChild(button)
        

        const div = document.createElement('div')
        document.getElementById('todoList').appendChild(div)
        
        chBox.addEventListener('change', (e) => {
            e.preventDefault()
            if(chBox.checked === true){
                titl.style.textDecoration = 'line-through'
                desc.style.textDecoration = 'line-through'
                pri.style.textDecoration = 'line-through'
                axios.put("https://api.vschool.io/bradduffy/todo/" + data[i]._id, {"completed": true})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            } else {
                titl.style.textDecoration = 'none'
                desc.style.textDecoration = 'none'
                pri.style.textDecoration = 'none'
                axios.put(`https://api.vschool.io/bradduffy/todo/${data[i]._id}`, {"completed": false})
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        })
        button.addEventListener('click', (e) =>{
            getData()
            axios.delete(`https://api.vschool.io/bradduffy/todo/${data[i]._id}`)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        })

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

    axios.post("https://api.vschool.io/bradduffy/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
    
    todoForm.title.value = ""
    todoForm.description.value = ""
    todoForm.price.value = ""
    todoForm.imgUrl.value = ""

})

