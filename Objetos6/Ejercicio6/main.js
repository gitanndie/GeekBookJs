var contador=0;
function incrementar(){
    contador++;
    alert('El contador ahora vale: ' + contador);
}

const geekGirl = {
    name: 'Rosa'
};
geekGirl.name;

const geekGirl2 = geekGirl;
geekGirl2.name;

geekGirl.name = 'Rocío';

geekGirl.name; //Rocío

