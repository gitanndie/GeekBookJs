
document.querySelector('.span').addEventListener('click',()=>{
document.querySelector('body').innerHTML += '<span>Añadir</span>'
/* `
<ol>
    <li class="teacher--selected">${card1}</li>
    <li class="teacher--selected">${card2}</li>
    <li class="teacher--selected">${card3}</li>
</ol>` */

document.querySelector('.span').addEventListener('click',change);

});

const change = (e) => console.log(e.srcElement.innerText);
