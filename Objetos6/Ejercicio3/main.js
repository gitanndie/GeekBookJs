const geekGirl = {}
    geekGirl.nombre = 'Susana';
    geekGirl.edad = '30 años';
    geekGirl.profesion = 'periodista';
    geekGirl.showBio = function() {
        return 'Hola, mi nombre es ' + "" + this.nombre
        + "" + 'tengo' +"" + this.edad + ""+
        'y soy ' + "" +this.profesion;
    }
    alert(geekGirl.showBio());

    const geekGirl2 = {}
    geekGirl2.nombre = 'Rocio';
    geekGirl2.edad = '25 años';
    geekGirl2.profesion = 'actriz';
    geekGirl2.showBio = function() {
        return 'Hola, mi nombre es ' + "" + this.nombre
        + "" + 'tengo' +"" + this.edad + ""+
        'y soy ' + "" +this.profesion;
    }

    alert(geekGirl2.showBio());