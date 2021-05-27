// The user can see their current list of todos.
// Todos show up as soon as the page loads.
// If a todo item is complete, it should have a strikethrough line on it

const { default: axios } = require("axios");
const todoForm = document.todoForm
// Images should be displayed as images if there are any
function getData(){
    axios.get("https://api.vschool.io/<brad-duffy>/todo/")
        .then(res => listData(res.data))
        .catch(err => console.log(err))
}

function listData(data){
    for(let i = 0; i < data.length; i++){
        const h1 = document.createElement('h2')
        h1.textContent = data[i].title
        document.getElementById('todoBody').appendChild(h1)
    }
}

function clearList(){
    
}