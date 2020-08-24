const geekGirl = {}
    geekGirl.nombre = 'Susana';
    geekGirl.edad = '30 años';
    geekGirl.runAMaraton = '50 kg';
    geekGirl.run = function() {
        return 'Hola, mi nombre es ' + "" + this.nombre
        + "" + ' y estoy corriendo ' + "" + this.runAMaraton;
    }
    console.log(geekGirl.run());


