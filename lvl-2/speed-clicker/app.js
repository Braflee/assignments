let index = JSON.parse(localStorage.getItem('count')) || 0
const sp = document.createElement('span')
const parent = document.getElementById('total')
const plusButton = document.getElementById('clickerUp')
const minusButton = document.getElementById('clickerDown')
sp.textContent = JSON.parse(localStorage.getItem('count')) || index 
parent.append(sp)

console.log(parent)

plusButton.addEventListener("click", function(event){
    event.preventDefault()
        index++    
        JSON.stringify(localStorage.setItem('count', index))
        sp.textContent = index 
})

minusButton.addEventListener("click", function(event){
    event.preventDefault()
        index--
        JSON.stringify(localStorage.setItem('count', index))
        sp.textContent = index
})

