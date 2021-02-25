const form = document.mobCalc
console.log(form.goomba.value)
form.addEventListener('submit', (mobTotal));
function mobTotal(e){
    e.preventDefault()
    
    const mob1 = parseInt(form.goomba.value) * 5;
    const mob2 = parseInt(form.bobomb.value) * 7;
    const mob3 = parseInt(form.cheepCheep.value) * 11;

    const yourTotal = document.createElement('h1');
    yourTotal.textContent = `Here's how much it's a-gonna cost you!: ${mob1 + mob2 + mob3} coins.`;

    form.append(yourTotal);
};