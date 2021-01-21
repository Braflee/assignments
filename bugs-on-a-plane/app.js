const form = document.getElementById("airline-form");
const submit = document.getElementById("submit");
//let query = document.querySelectorAll;

function formAlert(event) {
    event.preventDefault()
    let firstName = form.elements["first-name"].value;
    console.log(firstName)
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;
    let diet = []
    if (form.elements["vegan"].checked) {
        diet.push(document.getElementById("vegan").value);
    } else if (form.elements("gluten").checked) {
        diet.push(document.getElementById("gluten").value);
    } else if (form.elements("paleo").checked) {
        diet.push(document.getElementById("paleo").value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

console.log("TESTING")

submit.addEventListener("click", formAlert);