var initYear = 1900;
var finalYear = 2050;
for (initYear; initYear <= finalYear; initYear++) {
    if (((initYear % 4 == 0) && (initYear % 100 != 0)) || (initYear % 400 == 0)) {
        document.writeln(initYear + ' Es bisiesto. ');

    }   else {
            document.writeln(initYear + ' No es bisiesto ');
        }
    }