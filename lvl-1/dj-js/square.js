document.addEventListener("keydown", function(event){
    if(event.code === "KeyR") {
        document.getElementById("theButton").style.backgroundColor = "red";
    } else if(event.code === "KeyB") {
        document.getElementById("theButton").style.backgroundColor = "blue";
    } else if(event.code === "KeyW") {
        document.getElementById("theButton").style.backgroundColor = "white";
    } else if(event.code === "KeyY") {
        document.getElementById("theButton").style.backgroundColor = "yellow";
    } else if(event.code === "KeyG") {
        document.getElementById("theButton").style.backgroundColor = "green"
    } else if(event.code === "KeyO") {
        document.getElementById("theButton").style.backgroundColor = "orange"
    }
})

document.getElementById("theButton").addEventListener("mousedown", function(){
    theButton.style.backgroundColor = "red";
})

document.getElementById("theButton").addEventListener("mouseover", function(){
    theButton.style.backgroundColor = "blue";
})

document.getElementById("theButton").addEventListener("mouseleave", function(){
    theButton.style.backgroundColor = "white";
})

document.getElementById("theButton").addEventListener("mouseup", function(){
    theButton.style.backgroundColor = "yellow";
})

document.getElementById("theButton").addEventListener("dblclick", function(){
    theButton.style.backgroundColor = "green";
})

document.getElementById("box").addEventListener("wheel", function(){
    theButton.style.backgroundColor = "orange";
})



