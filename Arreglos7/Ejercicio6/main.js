const Obras = () => {
    const obra1 = document.getElementById("obra1").value;
    const obra2 = document.getElementById("obra2").value;
    
    let arr = [obra1, obra2];
    
    for (const obras of arr) {
        document.querySelector(".Obras").innerHTML +=
        `${obras}Tenemos mucho en común`;
    }
};

let boton = document.getElementById("enviar");
boton.addEventListener("click", Obras);