let tasks = [{
        name: "Recoger setas en el campo",
        completed: true
    },
    {
        name: "Comprar pilas",
        completed: true
    },
    {
        name: "Poner una lavadora de blancos",
        completed: true
    },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];
let tareas = () => {
    let porhacer = document.getElementById("porhacer");
    for (let i = 0; i < tasks.length; i++) {
        porhacer.innerHTML += `
        <input type="checkbox" ${tasks[i].completed == true ? "checked" : ""} />
        <label class="${tasks[i].completed == true ? "complete" : ""}">${
        tasks[i].name}</label>
    `;
    }
    document.getElementById(
        "homework"
    ).innerHTML = `Tienes ${tasks.length} tareas por realizar:`;
};
document.addEventListener("", tareas());

function update(event) {
    console.log(event.target);
}
let checkbox = document
    .getElementById("porhacer")
    .addEventListener("click", update);