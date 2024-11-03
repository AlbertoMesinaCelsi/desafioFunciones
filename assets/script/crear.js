
document.addEventListener("keydown", function(event) {
  const div = document.getElementById("key");
    if (event.key === "a" || event.key === "A") {
        key.style.backgroundColor = "pink"
    }else if(event.key === "s" || event.key === "S"){
        key.style.backgroundColor = "orange"
    }else if(event.key === "d" || event.key === "D"){
        key.style.backgroundColor = "skyblue"
    }else if (event.key === "q" || event.key === "Q") {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px"
        nuevoDiv.style.height = "200px"
        nuevoDiv.style.backgroundColor = "purple"
        document.body.appendChild(nuevoDiv)
    }else if (event.key === "w" || event.key === "W"){
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px"
        nuevoDiv.style.height = "200px"
        nuevoDiv.style.backgroundColor = "grey"
        document.body.appendChild(nuevoDiv)
    }else if (event.key === "e" || event.key === "E"){
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px"
        nuevoDiv.style.height = "200px"
        nuevoDiv.style.backgroundColor = "brown"
        document.body.appendChild(nuevoDiv)
    }
});





  