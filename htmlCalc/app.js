const addClicker = document.getElementById("addClicker").addEventListener("click", (plusFunc));
function plusFunc(e){
    e.preventDefault()

    const add1 = parseInt(document.getElementById("add1").value)
    const add2 = parseInt(document.getElementById("add2").value)

    //const sum = "|" + (add1 + add2) + "|"
    const sum = document.createElement("h2")
    sum.textContent = "|" + (add1 + add2) + "|"
    sum.style.color = "blue"

    document.getElementById("add").append(sum)

}

const subClicker = document.getElementById("subClicker").addEventListener("click", (minusFunc));
function minusFunc(e){
    e.preventDefault()

    const sub1 = parseInt(document.getElementById("sub1").value)
    const sub2 = parseInt(document.getElementById("sub2").value)

    const diff = document.createElement("h2")
    diff.textContent = "|" + (sub1 - sub2) + "|"
    diff.style.color = "red"

    document.getElementById("sub").append(diff)
}

const mulClicker = document.getElementById("mulClicker").addEventListener("click", (timesFunc));
function timesFunc(e){
    e.preventDefault()

    const mul1 = parseInt(document.getElementById("mul1").value)
    const mul2 = parseInt(document.getElementById("mul2").value)

    const prod = document.createElement("h2")
    prod.textContent = "|" + (mul1 * mul2) + "|"
    prod.style.color = "green"

    document.getElementById("mul").append(prod)
}