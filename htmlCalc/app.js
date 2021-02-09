const addForm = document["additionForm"];

addForm.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = addForm.add1.value
    const num2 = addForm.add2.value

    let newSum = num1 + num2
    console.log(newSum)

})
