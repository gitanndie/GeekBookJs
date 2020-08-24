const geekGirl = {}
    geekGirl.nombre = 'Susana';
    geekGirl.edad = '30 años';
    geekGirl.profesion = 'periodista';
    geekGirl.sayHello = function() {
        return 'Hola, mi nombre es ' + "" + this.nombre
        + "" + 'tengo' +"" + this.edad + ""+
        'y soy ' + "" +this.profesion;
    }
    console.log(geekGirl.sayHello());

    const geekGirl2 = {}
    geekGirl2.nombre = 'Rocio';
    geekGirl2.edad = '25 años';
    geekGirl2.profesion = 'actriz';
    geekGirl2.sayHello2 = function() {
        return 'Hola, mi nombre es ' + "" + this.nombre
        + "" + 'tengo' +"" + this.edad + ""+
        'y soy ' + "" +this.profesion;
    }

    console.log(geekGirl2.sayHello2());