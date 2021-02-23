const form = document.travelForm;

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const checkedinputs = [];

    // for(let i = 0; i < form.city.length; i++){
    //     if(form.city[i].checked){
    //         checkedinputs.push(form.city[i].value)
    //     }
    // }
    if (form.city.checked) {
        checkedinputs.push(form.city.value)
    }
    if (form.diet.checked) {
        checkedinputs.push(form.diet.value)
    }

    alert('First Name: ' + form.firstName.value + '\nLast Name: ' + form.lastName.value + '\nAge: ' + form.age.value + '\nGender: ' + form.gender.value + '\nDestination: ' + form.city.value + '\nDiet: ' + form.diet.value)

})